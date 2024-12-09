# AI Assisted Resource Navigator for Formerly Incarcerated Individuals: Focused Legal Resource Access

## Overview
Formerly incarcerated individuals often face significant challenges in their reintegration
process due to limited access to accurate, accessible legal information. This makes it
difficult for them to understand or get the right guidance on information they need to
reenter society. To get the right guidance and resources, they need to go through all the
fragmented resources thoroughly which might require a lot of time and legal understanding
of topics like employment, housing, and even civic participation. It will be very helpful if
they can get easy access to the resources they need, get access to details on existing or
prior cases with similar situations and delve deeper into specific information which can be
represented in a conversational format.

This is a React-based web application designed to assist users with legal resource navigation. Our AI tool aims to guide formerly incarcerated individuals through available resources that could serve as an essential support system. This tool can
be used as a conversational agent by the users to get in depth information regarding the resources they need.

## Features


- Modular architecture with reusable React components.
- **Gemini API:** We have used OpenAI API for our RAG PipeLine.
- **Current Status:** Retrieves information by hitting the OpenAI API.

## Project Structure

### Root Directory:

- **node_modules**: Contains dependencies required for the project.
- **public**: Holds all resources and icons needed for the project.
- **src**: Core project files and source code.
- **.env**: Stores environment variables, currently added to `.gitignore` file.
- **.gitignore**: Specifies files to be excluded from Git tracking.
- **index.html**: Main HTML template for the app.
- **package.json**: Includes project metadata and scripts.
- **vite.config.js**: Configuration file for Vite (build tool).


### src:

- **main.jsx**: Entry point for the React application.
- **index.css**: Styles and customization for the entire application.
- **App.jsx**: Root React component.

### Folders:
- **assets**: Contains assets like images and icons.
- **components**: Modular React components. The app has two main components: side-bar and main component.
- **main**: The main application component folder.
  - **Main.jsx**: Main content component.
  - **main.css**: Styles for `Main.jsx`.

- **sidebar**: Contains sidebar components.
  - **SideBar.jsx**: Sidebar component.
  - **sidebar.css**: Styles for `SideBar.jsx`.


- **config**: Contains configuration files.
- **Context.jsx**: Provides global state management.

## Installation
To install the project, follow these steps:

1. **(Optional) Create a Virtual Environment**

    We created a virtual environment to maintain versions and particular requiremnts separate from other projects

    Instructions:
    Run the following commands in your terminal to create a virtual environment:

    ```bash
    python -m venv env_hciai
    source env_hciai/bin/activate  # On macOS/Linux
    env_hciai\Scripts\activate     # On Windows
    ```

2. **Clone the Repository**

    Instructions:
    ```bash
    git clone https://github.com/aishwaryakumara/LegalAI_HCI.git
    ```

3. **Navigate to the project directory:**
    ```bash
    cd FE-AI-Assisted-Resource-Navigator-for-Formerly-Incarcerated-Individuals
    ```
4. **Install Vite:**
    ```bash
    npm install vite
    ```

    Alternative commands using nvm:
    ```bash
    nvm install --lts
    nvm use --lts
    npm install --save-dev vite
    npx vite
    ```
5. **(Optional) Set Up .env File**
    We have set a .env file to store our API Key Securely. We have included this env file in .gitignore so that it does not get added to Github when we push our code.

    Instructions:
    You can choose to setup a .env file to maintain your API keys and load into into the python environment. Alternatively, you can also directly use the API key in the code

    Create a .env file in the root directory to store your API key securely:
    ```bash
        OPENAI_API_KEY="your_api_key_here"
    ```

    To prevent accidental sharing of the .env file, add it to .gitignore:
    Create a .gitignore file and add .env

    We have currently added our API key for the purpose of testing this application


6. **Run the code:**
    ```bash
    npm run dev
    ```

## Usage
To use the AI interface, follow these steps:

1. Run the application:
    ```bash
    npm run dev
    ```
2. Open your web browser and navigate to `http://localhost:5173`.
3. Enter your query in the search bar and click on the arrow button to search.
4. Review the results

## Contact
For any questions or inquiries, please contact us at [arvind.ai@northeastern.edu] [chandrakumar.s@northeastern.edu].
