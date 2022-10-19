import React from 'react'
import Head from 'next/head'
import * as Fathom from 'fathom-client'

export function ClientRedirect({ url }) {
  const domain = new URL(url).hostname

  React.useEffect(() => {
    Fathom.trackPageview()
  }, [])

  return (
    <>
      <style jsx global>
        {`
          .redirect-page {
            color: #383838;
            font-family: 'Menlo', 'Monaco', Courier, monospace;
            font-size: 0.8em;
            display: flex;
            height: 90vh;
            justify-content: center;
            align-items: center;
          }
          .dark-mode .redirect-page {
            background-color: var(--bg-color);
            color: var(--fg-color);
            height: 100vh;
          }
        `}
      </style>
      <Head>
        <title>Redirecting {domain}…</title>
        <meta http-equiv='refresh' content={`0; URL=${url}`} />
        <link rel='canonical' href={`${url}`} />
      </Head>
      <div className='redirect-page'>Redirecting to {domain}…</div>
    </>
  )
}
