# Node Express Notes
These notes serve as a learning resource for beginners who want to start with backend development, as well as a revision guide for those who are already familiar with Node.js and Express.js.

The notes cover the basics of Node.js, including its features, installation, and setup. They also include topics such as handling requests and responses, working with HTTP, and managing modules and packages.

Additionally, the notes delve into the fundamentals of Express.js, such as routing, middleware, templating engines, and error handling. Practical examples and tips are also provided for creating web applications using Express.js.

Overall, these notes provide a comprehensive and valuable resource for anyone looking to learn or improve their skills in Node.js and Express.js.

---
# Setting up the environment

### Install Obsidian on Windows 

1.  Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2.  Under **Windows**, click **64-bit installer** to download the installation file.
3.  Open the installation file and follow the instructions.
4.  Open Obsidian the same way you would open any other application.

### Install Obsidian on macOS 

1.  Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2.  Under **macOS**, click **Universal DMG (Intel and M1)** to download the installation file.
3.  Open the installation file.
4.  In the window that opens, drag Obsidian to the Applications folder.
5.  Open Obsidian the same way you would open any other application.

### Install Obsidian on Linux

If you use Linux, you can install Obsidian in several ways. Follow the instructions for the packaging system that you're using.

#### Install Obsidian using Snap

1.  Open your browser and go to [Download Obsidian](https://obsidian.md/download)
2.  Under **Linux**, click **Snap** to download the installation file.
3.  Open a terminal and navigate to the folder where you downloaded the installation file.
4.  In the terminal, run the following command to install the Snap package: (the `--dangerous` flag is required because Canonical, the company who created Snap, didn't review our package, the `--classic` flag allows Obsidian to access outside of the sandbox, where your notes are stored)
    ```bash
    snap install obsidian_<version>_<arch>.snap --dangerous --classic
    ```
5.  Open Obsidian the same way you would open any other application.

#### Install Obsidian using AppImage

1.  Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2.  Under **Linux**, click **AppImage** to download the installation file.
3.  Open a terminal and navigate to the folder where you downloaded the installation file.
4.  In the terminal, run the following command to open Obsidian:
    ```bash
    chmod u+x Obsidian-<version>.AppImage
    ./Obsidian-<version>.AppImage
    ```

#### Install Obsidian using Flatpak

1.  In your terminal, run the following command to install Obsidian:
    ```bash
    flatpak install flathub md.obsidian.Obsidian
    ```
    
2.  Open Obsidian by running the following command:
    ```bash
    flatpak run md.obsidian.Obsidian
    ```

---
After completing the installation, you can proceed to the next step by cloning the repository using the Git command-line interface:

1.  Open a terminal window.
2.  Type the following command and press Enter:

```bash
gh repo clone Ashu0Singh/Node-Express-Notes
```

This command will clone the repository from the specified URL and create a local copy on your computer. You can now navigate to the project directory and start working on it.

To access these notes, you can open the local copy of this repository in both Visual Studio Code and Obsidian. The repository includes code snippets and markdown files to provide examples and explanations for the concepts covered in the notes.

To get started, open the repository folder in both editors and explore the files provided. The code snippets can be executed and modified within your local environment, allowing you to experiment and gain hands-on experience with Node.js and Express.js