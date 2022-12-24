import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactmeService {
  apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey =
      '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';
    console.log('Service loaded');
  }

  sendMail(name: string, email: string, message: string, project: string) {
    return this.http.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: {
          name,
          email,
        },
        to: [
          {
            name: 'Dinesh Kumar',
            email: 'dnkumar0510@gmail.com',
          },
        ],
        subject: `Hello, from ${name}(${email})`,
        htmlContent: `
		<!-- Free to use, HTML email template designed & built by FullSphere. Learn more about us at www.fullsphere.co.uk -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->

    <!-- Your title goes here -->
    <title>Newsletter</title>
    <!-- End title -->

    <!-- Start stylesheet -->
    <style type="text/css">
      a,a[href],a:hover, a:link, a:visited {
        /* This is the link colour */
        text-decoration: none!important;
        color: #0000EE;
      }
      .link {
        text-decoration: underline!important;
      }
      p, p:visited {
        /* Fallback paragraph style */
        font-size:15px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:300;
        text-decoration:none;
        color: #000000;
      }
      h1 {
        /* Fallback heading style */
        font-size:22px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:normal;
        text-decoration:none;
        color: #000000;
      }
      .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
      .ExternalClass {width: 100%;}
    </style>
    <!-- End stylesheet -->
  </head>

  <!-- You can change background colour here -->
  <body
    style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000"
    align="center"
  >
    <!-- Fallback force center content -->
    <div style="text-align: center;">
      <!-- Start container for logo -->
      <table
        align="center"
        style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
        width="600"
      >
        <tbody>
          <tr>
            <td
              style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;"
              width="596"
            >
              <!-- Your logo is here -->
              <img
                style="width: 100px; max-width: 100px; height: 50px; max-height: 50px; text-align: center; color: #ffffff;"
                alt="Logo"
                src="https://logos.textgiraffe.com/logos/logo-name/Dinesh-designstyle-friday-m.png"
                align="center"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End container for logo -->

      <!-- Hero image -->
      <img
        style="width: 600px; max-width: 600px; max-height: 400px; text-align: center;"
        alt="Hero image"
        src="https://viame.ae/wp-content/uploads/2019/09/How-to-Establish-a-Better-Call-Centre-1-1024x743.png"
        align="center"
      />
      <!-- Hero image -->

      <!-- Start single column section -->
      <table
        align="center"
        style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
        width="600"
      >
        <tbody>
          <tr>
            <td
              style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;"
              width="596"
            >
              <h1
                style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;"
              >
                Project(By ${name}) - ${project}
              </h1>

              <p
                style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;"
              >
                Description - ${message}
              </p>

              <p
                style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;"
              >
                Sent by - ${email}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Start footer -->
      <table
        align="center"
        style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;"
        width="600"
      >
        <tbody>
          <tr>
            <td
              style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;"
              width="596"
            >
              <!-- Your inverted logo is here -->
              <img
                style="width: 100px; max-width: 100px; height: 60px; max-height: 50px; text-align: center; color: #ffffff;"
                alt="Logo"
                src="https://logos.textgiraffe.com/logos/logo-name/Dinesh-designstyle-friday-m.png"
                align="center"
                width="40"
                height="40"
              />

              <p
                style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;"
              >
                Agra, UP(283105), India
              </p>

              <p
                style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;"
              >
                <a
                  target="_blank"
                  style="text-decoration: underline; color: #ffffff;"
                  href="https://dineshkumar-bio.vercel.app/"
                >
                  My Bio Website <u>Link</u>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
	
        `,
      },
      {
        headers: {
          'content-type': 'application/json',
          'api-key': this.apiKey,
        },
      }
    );
  }
}
