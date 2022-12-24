import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactmeService {
  API_KEY = '';

  constructor(private http: HttpClient) {}

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
        <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title></title>
	<!--[if mso]>
	<noscript>
		<xml>
			<o:OfficeDocumentSettings>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
	</noscript>
	<![endif]-->
	<style>
		table, td, div, h1, p {font-family: Arial, sans-serif;}
	</style>
</head>
<body style="margin:0;padding:0;">
	<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		<tr>
			<td align="center" style="padding:0;">
				<table role="presentation" style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
					<tr>
						<td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
							<img src="https://assets.codepen.io/210284/h1.png" alt="" width="300" style="height:auto;display:block;" />
						</td>
					</tr>
					<tr>
						<td style="padding:36px 30px 42px 30px;">
							<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
								<tr>
									<td style="padding:0 0 36px 0;color:#153643;">
										<h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Hello, ${name}</h1>
										<p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                      PROJECT NAME: ${project}
                    </p>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"> DESCRIPTION:  ${message} </p>
									</td>
							  </tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
        `,
      },
      {
        headers: {
          'api-key':
            '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',
        },
      }
    );
  }
}
