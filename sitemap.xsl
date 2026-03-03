<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Paintball Gemilang</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; color: #333; margin: 0; padding: 20px; background-color: #f9f9f9; }
          .container { max-width: 1000px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          h1 { color: #047857; }
          table { border: none; border-collapse: collapse; width: 100%; margin-top: 20px; }
          th { background: #047857; color: #fff; text-align: left; padding: 12px; font-size: 14px; border-radius: 4px 4px 0 0; }
          tr:nth-child(even) td { background-color: #f2f2f2; }
          td { padding: 12px; border-bottom: 1px solid #ddd; }
          a { color: #047857; text-decoration: none; font-weight: 500;}
          a:hover { text-decoration: underline; color: #065f46; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p>This is an XML Sitemap designed to be processed by search engines like Google, Bing, and Yahoo.</p>
          <table>
            <tr>
              <th>URL</th>
              <th>Priority</th>
              <th>Change Frequency</th>
              <th>Last Modified</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:priority"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
