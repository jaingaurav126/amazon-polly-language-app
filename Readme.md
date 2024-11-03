

aws configure

Step 2
aws dynamodb create-table --table-name LanguageAppUsers --attribute-definitions AttributeName=UserID,AttributeType=S --key-schema AttributeName=UserID,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

npx create-react-app language-learning-app

Set up Node.js/Express backend:
mkdir language-learning-backend
cd language-learning-backend
npm init -y
npm install express aws-sdk dotenv body-parser cors


Backend: Node.js/Express Setup
npm install aws-sdk

Add environment variables in .env:
AWS_REGION=<YOUR_AWS_REGION>
AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY>
AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_KEY>
DYNAMODB_TABLE=LanguageAppUsers


app.js (Main Backend File)

AWS Comprehend Route - analyze.js

AWS Polly Route - audio.js

Progress Tracking Route - progress.js



 Frontend: React Setup
Install Axios for HTTP Requests
npm install axios


App.js (Frontend Component)

Test:
English Sentences
Positive Sentiment: "I absolutely love this place! The food is amazing and the service is excellent."
Negative Sentiment: "I had a terrible experience. The staff was rude and the food was cold."
Neutral Sentiment: "The weather is nice today, but I have some work to finish."

Spanish Sentences
Positive Sentiment: "¡Me encanta este lugar! La comida es increíble y el servicio es excelente."
Negative Sentiment: "Tuve una experiencia terrible. El personal fue grosero y la comida estaba fría."
Neutral Sentiment: "El clima está agradable hoy, pero tengo un poco de trabajo que terminar."

French Sentences
Positive Sentiment: "J'adore cet endroit ! La nourriture est incroyable et le service est excellent."
Negative Sentiment: "J'ai eu une terrible expérience. Le personnel était impoli et la nourriture était froide."
Neutral Sentiment: "Le temps est agréable aujourd'hui, mais j'ai du travail à terminer."





