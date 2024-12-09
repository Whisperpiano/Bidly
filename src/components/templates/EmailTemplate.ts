export const EmailTemplate = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bidlify - Subscription Confirmation</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    color: #333;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #275da2;
                    color: #ffffff;
                    text-align: center;
                    padding: 20px;
                    font-size: 24px;
                    font-weight: bold;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .content h1 {
                    font-size: 28px;
                    color: #275da2;
                    margin-bottom: 10px;
                }
                .content p {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
                .cta {
                    display: inline-block;
                    background-color: #275da2;
                    color: #ffffff !impportant;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: bold;
                }
                .footer {
                    background-color: #f1f1f1;
                    text-align: center;
                    padding: 10px;
                    font-size: 12px;
                    color: #777;
                }
                .footer a {
                    color: #4caf50;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <!-- Header -->
                <div class="header">
                    Welcome to Bidlify!
                </div>

                <!-- Content -->
                <div class="content">
                    <h1>Hello!</h1>
                    <p>Thanks for subscribing to <strong>Bidlify</strong>! We’re excited to have you on board.</p>
                    <p>Get ready to explore exclusive auctions and make the most of your experience with us.</p>
                    <a href="https://bidlify.netlify.app/home" class="cta">Start Browsing</a>
                </div>

                <!-- Footer -->
                <div class="footer">
                    If you have any questions, feel free to <a href="mailto:support@bidlify.com">contact us</a>.
                    <br />
                    © 2024 Bidlify, Inc. All rights reserved.
                </div>
            </div>
        </body>
        </html>`;
