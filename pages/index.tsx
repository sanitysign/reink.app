import Head from 'next/head'
// import { useEffect } from 'react'
// import { Database, aql } from 'arangojs'
// import debug from 'debug'
import { Container, Row, Col, Text } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextUI | Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app and using NextUI as a react UI library'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Text
          h1
          color='grey800'
          size={72}
          transform='uppercase'
          css={{
            textAlign: 'center',
          }}
        >
          Lydia Rabin. DAILY
        </Text>

        <Container css={{
          border: '2px solid #000',
          borderLeft: '0',
          borderRight: '0',
          padding: '3px 0'
        }}>
          <Row css={{
            border: '1px solid #000',
            borderWidth: '1px 0',
            lineHeight: '40px',
            textAlign: 'center',
          }}>
            <Col>ISSUE #1</Col>
            <Col>Tue May 24</Col>
            <Col>Clear 19'C</Col>
          </Row>
        </Container>

      </Container>
    </>
  )
}
