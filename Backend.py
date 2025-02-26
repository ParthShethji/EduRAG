
# # # from flask import Flask

# # # app = Flask(__name__)

# # # @app.route('/')
# # # def hello():
# # #     return "Hello, Flask!"

# # # if __name__ == '__main__':
# # #     # Run the app in debug mode on localhost:5000
# # #     app.run(debug=True)
# # from flask import Flask, request, jsonify
# # import os
# # from werkzeug.utils import secure_filename

# # app = Flask(__name__)

# # # Configuration for file uploads
# # UPLOAD_FOLDER = 'uploads'
# # os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# # app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# # @app.route('/')
# # def hello():
# #     return "Hello, Flask!"

# # # 1. Upload PDF and store locally in some folder
# # @app.route('/upload', methods=['POST'])
# # def upload_pdf():
# #     # Check if a file part is in the request
# #     if 'file' not in request.files:
# #         return jsonify({'error': 'No file part in the request'}), 400
    
# #     file = request.files['file']
    
# #     # Check if a file is selected
# #     if file.filename == '':
# #         return jsonify({'error': 'No file selected for uploading'}), 400
    
# #     # Validate if the file is a PDF
# #     if file and file.filename.lower().endswith('.pdf'):
# #         filename = secure_filename(file.filename)
# #         file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
# #         file.save(file_path)
# #         return jsonify({'message': 'File successfully uploaded', 'file_path': file_path}), 200
# #     else:
# #         return jsonify({'error': 'Allowed file type is PDF'}), 400

# # # 2. Summarisation endpoint
# # @app.route('/summarise', methods=['POST'])
# # def summarise():
# #     data = request.get_json()
# #     if not data or 'text' not in data:
# #         return jsonify({'error': 'No text provided'}), 400
    
# #     text = data['text']
# #     # Placeholder summarisation logic (replace with actual model call)
# #     summary = f"Summary: {text[:50]}..."  # This is just a placeholder
# #     return jsonify({'summary': summary}), 200

# # # 3. Quiz Generation endpoint
# # @app.route('/quiz', methods=['POST'])
# # def quiz_generation():
# #     data = request.get_json()
# #     if not data or 'text' not in data:
# #         return jsonify({'error': 'No text provided'}), 400
    
# #     text = data['text']
# #     # Placeholder quiz generation logic (replace with actual model call)
# #     quiz = {
# #         "questions": [
# #             {
# #                 "question": "What is the main idea?",
# #                 "options": ["Option A", "Option B", "Option C", "Option D"],
# #                 "answer": "Option A"
# #             }
# #         ]
# #     }
# #     return jsonify({'quiz': quiz}), 200

# # # 4. Q&A endpoint
# # @app.route('/qa', methods=['POST'])
# # def qa():
# #     data = request.get_json()
# #     if not data or 'question' not in data or 'context' not in data:
# #         return jsonify({'error': 'Both question and context are required'}), 400
    
# #     question = data['question']
# #     context = data['context']
# #     # Placeholder Q&A logic (replace with actual model call)
# #     answer = f"Answer to '{question}' based on the provided context."  # Placeholder answer
# #     return jsonify({'answer': answer}), 200

# # if __name__ == '__main__':
# #     app.run(debug=True)
# from flask import Flask, request, jsonify
# from PyPDF2 import PdfReader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# import numpy as np
# import faiss
# import pickle
# import google.generativeai as genai
# from langchain_google_genai import GoogleGenerativeAIEmbeddings
# from dotenv import load_dotenv
# import os

# app = Flask(__name__)
# load_dotenv()

# genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
# embeddings_model = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
# @app.route('/')
# def hello():
#     return "Hello, Flask!"

# def load_pdf(file):
#     """Extracts text from a PDF file."""
#     reader = PdfReader(file)
#     text = "\n".join([page.extract_text() for page in reader.pages if page.extract_text()])
#     return text

# def chunk_text(text, chunk_size=500, chunk_overlap=100):
#     """Splits extracted text into manageable chunks."""
#     text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
#     return text_splitter.split_text(text)

# def generate_gemini_embeddings(text_chunks):
#     """Converts text chunks into embeddings using Gemini."""
#     embeddings = embeddings_model.embed_documents(text_chunks)
#     return np.array(embeddings).astype("float32"), text_chunks

# @app.route("/process", methods=["POST"])
# def process_pdf():
#     """Processes the uploaded PDF, extracts text, generates embeddings, and saves them."""
#     if 'file' not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400
    
#     file = request.files['file']
#     text = load_pdf(file)
#     chunks = chunk_text(text)
#     embeddings, texts = generate_gemini_embeddings(chunks)
    
#     index = faiss.IndexFlatL2(embeddings.shape[1])
#     index.add(embeddings)
#     faiss.write_index(index, "faiss.index")
    
#     with open("stored_chunks.pkl", "wb") as f:
#         pickle.dump(texts, f)
    
#     return jsonify({"message": "PDF processed and stored successfully"})

# @app.route("/extract_topics", methods=["GET"])
# def extract_topics():
#     """Extracts key topics from stored FAISS chunks."""
#     with open("stored_chunks.pkl", "rb") as f:
#         texts = pickle.load(f)
#     combined_text = "\n".join(texts)
#     model = genai.GenerativeModel('gemini-pro')
#     prompt = f"Extract the most important topics from the following study material:\n\n{combined_text}"
#     response = model.generate_content(prompt)
#     return jsonify({"topics": response.text.strip()})

# @app.route("/summarize", methods=["GET"])
# def summarize():
#     """Summarizes the extracted text."""
#     with open("stored_chunks.pkl", "rb") as f:
#         texts = pickle.load(f)
#     combined_text = "\n".join(texts)
#     model = genai.GenerativeModel('gemini-pro')
#     prompt = f"Summarize the following and just return the summary:\n\n{combined_text}"
#     response = model.generate_content(prompt)
#     return jsonify({"summary": response.text.strip()})

# @app.route("/generate_quiz", methods=["GET"])
# def generate_quiz():
#     """Generates a quiz from the extracted text."""
#     with open("stored_chunks.pkl", "rb") as f:
#         texts = pickle.load(f)
#     combined_text = "\n".join(texts)
#     model = genai.GenerativeModel('gemini-pro')
#     prompt = f"Generate a quiz for the following content:\n\n{combined_text}"
#     response = model.generate_content(prompt)
#     return jsonify({"quiz": response.text.strip()})

# @app.route("/answer_question", methods=["POST"])
# def answer_question():
#     """Answers a given question using extracted text."""
#     data = request.json
#     question = data.get("question")
#     if not question:
#         return jsonify({"error": "No question provided"}), 400
    
#     with open("stored_chunks.pkl", "rb") as f:
#         texts = pickle.load(f)
#     combined_text = "\n".join(texts)
#     model = genai.GenerativeModel('gemini-pro')
#     prompt = f"Answer the following question from the given text.\n\nGiven text: {combined_text}\n\n{question}"
#     response = model.generate_content(prompt)
#     return jsonify({"answer": response.text.strip()})

# if __name__ == "__main__":
#     app.run(debug=True,host="0.0.0.0", port=5000)
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
import faiss
import numpy as np
import pickle
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.document_loaders import PyPDFLoader
import os

app = Flask(__name__)
load_dotenv()

gen_model = genai.GenerativeModel('gemini-2.0-flash')
embeddings_model = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

def load_pdf(file_path):
    """Loads a PDF and extracts text from it."""
    loader = PyPDFLoader(file_path)
    return loader.load()

def chunk_text(documents, chunk_size=500, chunk_overlap=100):
    """Splits extracted text into manageable chunks."""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size, chunk_overlap=chunk_overlap
    )
    return text_splitter.split_documents(documents)

def generate_gemini_embeddings(text_chunks):
    """Converts text chunks into Gemini embeddings."""
    texts = [chunk.page_content for chunk in text_chunks]
    embeddings = embeddings_model.embed_documents(texts)
    return np.array(embeddings).astype("float32"), texts

def save_faiss_index(embeddings):
    """Saves embeddings to FAISS index."""
    index = faiss.IndexFlatL2(embeddings.shape[1])
    index.add(embeddings)
    faiss.write_index(index, "faiss.index")

def save_text_chunks(texts):
    """Saves text chunks separately."""
    with open("stored_chunks.pkl", "wb") as f:
        pickle.dump(texts, f)

def extract_topics_and_summarize(chunks):
    """Extracts topics and provides a summary from chunks."""
    combined_text = "\n".join(chunks)
    topics_prompt = f"Extract the most important topics from the following study material:\n\n{combined_text}"
    topics = gen_model.generate_content(topics_prompt).text.strip()
    summary_prompt = f"Summarize the following and just return the summary:\n\n{combined_text}"
    summary = gen_model.generate_content(summary_prompt).text.strip()
    return {"topics": topics, "summary": summary}

def generate_quiz(chunks):
    """Generates a quiz from given chunks."""
    combined_text = "\n".join(chunks)
    prompt = f"Generate a quiz for the following content:\n\n{combined_text}"
    return gen_model.generate_content(prompt).text.strip()

def answer_question(chunks, question):
    """Answers a specific question from the given text."""
    combined_text = "\n".join(chunks)
    prompt = f"Answer the following question from the given text.\n\nGiven text:{combined_text}\n\n{question}"
    return gen_model.generate_content(prompt).text.strip()

@app.route('/process_pdf', methods=['POST'])
def process_pdf():
    """API route to process a PDF and store embeddings."""
    file_path = request.json.get('../ikigai.pdf')
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404
    
    documents = load_pdf(file_path)
    text_chunks = chunk_text(documents)
    '''pdf chunked'''
    embeddings, texts = generate_gemini_embeddings(text_chunks)
    '''embeddings done'''
    save_faiss_index(embeddings)
    '''faiss done'''
    save_text_chunks(texts)
    return jsonify({"message": "PDF processed and stored successfully."})

@app.route('/extract_summary', methods=['GET'])
def extract_summary():
    """API route to extract topics and summary."""
    with open("stored_chunks.pkl", "rb") as f:
        texts = pickle.load(f)
    result = extract_topics_and_summarize(texts)
    return jsonify(result)

@app.route('/generate_quiz', methods=['GET'])
def quiz():
    """API route to generate a quiz."""
    with open("stored_chunks.pkl", "rb") as f:
        texts = pickle.load(f)
    return jsonify({"quiz": generate_quiz(texts)})

@app.route('/answer_question', methods=['POST'])
def answer():
    """API route to answer a question based on stored content."""
    question = request.json.get('question')
    with open("stored_chunks.pkl", "rb") as f:
        texts = pickle.load(f)
    return jsonify({"answer": answer_question(texts, question)})

if __name__ == '__main__':
    app.run(debug=True)
