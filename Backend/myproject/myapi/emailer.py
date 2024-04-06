import smtplib
from email.message import EmailMessage

# Email Credentials for Mailing 
SENDER_EMAIL = "thedetectify24@gmail.com"
#APP_PASSWORD = "hello1230"
APP_PASSWORD = "htkrlcujlqklkdlr"

# CSV Emailing Function
def emailRecords(recipient_email, no_criminals, csv_file):
    msg = EmailMessage()
    msg['Subject'] = "Video Processing Complete | Check Results"
    msg['From'] = SENDER_EMAIL
    msg['To'] = recipient_email
    msg.set_content(
        "Greetings!\nYour video has been processed.\nWe found " + str(no_criminals) + " criminal instances in this Video.\nKindly find the attached CSV file to keep the record of timestamps.\nRegards,\nDetectify24")

    with open(csv_file, 'rb') as f:
        file_data = f.read()

    msg.add_attachment(file_data, maintype="application", subtype="csv", filename='Criminal_Records.csv')

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(SENDER_EMAIL, APP_PASSWORD)
        smtp.send_message(msg)


# Image Emailing Function
def emailImages(recipient_email, no_criminals, image_file):
    msg = EmailMessage()
    msg['Subject'] = "Image Processing Complete | Check Results"
    msg['From'] = SENDER_EMAIL
    msg['To'] = recipient_email
    msg.set_content(
        "Greetings!\nYour image has been processed.\nWe found " + str(no_criminals) + " criminals in this Image.\nKindly find the images with the the face locations of the criminals.\nRegards,\nDetectify24")

    with open(image_file, 'rb') as f:
        file_data = f.read()

    msg.add_attachment(file_data, maintype="image", subtype="jpg", filename='Processed_Image.jpg')

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(SENDER_EMAIL, APP_PASSWORD)
        smtp.send_message(msg)