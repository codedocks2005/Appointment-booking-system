<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:appts="http://www.example.com/appointments" version="1.0">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Appointments</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Appointment List</h1>
                <table>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Customer ID</th>
                        <th>Service ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                    <xsl:for-each select="appts:appointments/appts:appointment">
                        <tr>
                            <td><xsl:value-of select="@id"/></td>
                            <td><xsl:value-of select="appts:customerId"/></td>
                            <td><xsl:value-of select="appts:serviceId"/></td>
                            <td><xsl:value-of select="appts:appointmentDate"/></td>
                            <td><xsl:value-of select="appts:appointmentTime"/></td>
                            <td><xsl:value-of select="appts:status"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>