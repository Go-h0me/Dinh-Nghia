import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang='en'>
                <Head >
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                    <meta
                        name='description'
                        content='Full stack developer looking for a job'
                    />
                    <meta
                        name='keyworks'
                        content='Full stack Web developer ,Freelancer ,MERN developer'
                    />
                </Head>
                <body className='bg-fixed bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument