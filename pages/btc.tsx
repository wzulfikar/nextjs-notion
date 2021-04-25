import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useCopyToClipboard } from 'react-use'
import QRCode from 'qrcode.react'
import { domain, twitter } from 'lib/config'

const styles = {
  container: {
    display: 'grid',
    placeContent: 'center',
    background: 'black',
    color: 'white',
    height: '100vh',
    fontFamily: 'monospace'
  },
  title: { margin: 'auto', paddingBottom: 10 },
  qrcode: {
    margin: 'auto',
    padding: '8px 8px 5px 8px',
    background: 'white'
  },
  address: {
    paddingTop: 8,
    fontSize: 11
  },
  buttonPrimary: {
    background: 'transparent',
    border: '1px solid white',
    marginTop: '1rem',
    padding: 3,
    fontFamily: 'monospace',
    color: 'white',
    textTransform: 'uppercase' as any,
    fontSize: 11
  },
  buttonSecondary: {
    display: 'flex',
    background: 'transparent',
    marginTop: '0.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'monospace',
    color: 'white',
    textDecoration: 'underline' as any,
    textTransform: 'uppercase' as any,
    fontSize: 11
  }
}

export default function Btc({ address }) {
  const ref = useRef(null)
  const [_, copyToClipboard] = useCopyToClipboard()

  function onClick() {
    copyToClipboard(address)

    const originalText = ref.current.innerText
    setTimeout(() => {
      ref.current.innerText = originalText
    }, 2000)

    ref.current.innerText = 'address copied!'
  }

  const title = `Send BTC to ${twitter}`
  const pageUrl = `https://${domain}/btc`
  const socialImage =
    'https://og-image.wzulfikar.com/https%3A%2F%2Fwzulfikar.com%2Fbtc.png?&template=webshot'

  return (
    <>
      <Head>
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={domain} />

        <meta name='twitter:title' content={title} />
        <meta property='twitter:domain' content={domain} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialImage} />
        <meta property='og:image' content={socialImage} />

        <link rel='canonical' href={pageUrl} />
        <meta property='og:url' content={pageUrl} />
        <meta property='twitter:url' content={pageUrl} />
      </Head>
      <div style={styles.container}>
        <div style={styles.title}>{title}</div>

        <div style={styles.qrcode}>
          <QRCode size={200} value={address} />
        </div>
        <div style={styles.address}>{address}</div>
        <button ref={ref} onClick={onClick} style={styles.buttonPrimary}>
          copy address
        </button>

        <Link href='/'>
          <a style={styles.buttonSecondary}>&larr; back to home</a>
        </Link>
      </div>
    </>
  )
}

export function getStaticProps() {
  const btcAddresses = (process.env.BTC_ADDRESSES || '').split(',')
  const randomInt = Math.floor(Math.random() * btcAddresses.length + 0)

  // Get random address
  const address = btcAddresses.length ? btcAddresses[randomInt] : null

  return {
    props: {
      address: address
    },
    revalidate: 3
  }
}
