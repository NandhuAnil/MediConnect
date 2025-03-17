export const welcomeEmailTemplate =`
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
        }
        h1 {
            color: #4CAF50;
            font-size: 28px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        }
        .cta-button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 16px;
            color: #ffffff;
            background-color: #4CAF50;
            border-radius: 4px;
            text-decoration: none;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #45a049;
        }
        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #aaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to MediConnect, {name}!</h1>
        <p>We're thrilled to have you join us!</p>
        <p>With MediConnect, you can:</p>
        <ul style="text-align: left; margin-left: 40px;">
            <li>Book online appointments with world-class doctors</li>
            <li>Access expert medical advice from top specialists</li>
            <li>Track your health records securely</li>
            <li>Receive real-time health updates and reminders</li>
        </ul>
        <p>Your health is our top priority. Start your journey toward better health today!</p>
        <div class="footer">
            <p>If you have any questions, feel free to reach out to us at <a href="#">mediconnect2801@gmail.com</a></p>
            <p>Thank you for trusting MediConnect!</p>
        </div>
    </div>
</body>
</html>
`;