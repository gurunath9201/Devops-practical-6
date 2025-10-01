pipeline {
    agent any
    environment {
        // Define your deployment directory based on your web server setup
        DEPLOY_DIR = '/var/www/html/' 
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning project from GitHub...'
                // Replace with your actual repository URL and branch
                git branch: 'main', url: 'https://github.com/your-repo/web-app.git' 
            }
        }
        stage('Build') {
            steps {
                echo 'Build Step: Files checked out and ready. (No compilation needed for simple HTML)'
                // For a simple web app, the 'build' might just be a check or a lightweight task.
            }
        }
        stage('Test') {
            steps {
                echo 'Test Step: Validating index.html syntax (using a dummy echo)'
                // In a real scenario, you'd use a tool like HTML Tidy for validation.
                // bat 'tidy -e index.html' // If tidy is installed
                echo 'Validation completed.'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying files to webserver root: ${DEPLOY_DIR}"
                // Copy all files from Jenkins workspace to the target directory.
                // This assumes Jenkins has permissions to write to the DEPLOY_DIR.
                sh "cp -r * ${DEPLOY_DIR}" 
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully! Application deployed.'
        }
        failure {
            echo 'Pipeline failed! Check build logs.'
        }
    }
}