const { initializeApp } = require('firebase-admin/app');

const firebaseConfig = {
    "type": "service_account",
    "project_id": "hackathongarden",
    "private_key_id": "cfaab36fda9b48065610806f59ec8f928a651c1b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDroEbh71fntvyR\nJYIwA7i0Xq6F24ntIuyXDRhS1obZtMXfxmpKfaPPPppzoiEfGISg9ZfAWwh38l8v\ng7zl70l8Jmg+DGLSSLG1afrRoZx+GE3HACqTPEoVSoyKZbNno7ZfWpHDcSPR8zy5\ndwagSB9nB9fG18WQIV4/RlTfP6CWG9IfCwMTNTmdWQQCGa29SMaKWulusHF7zkvO\nwODoipebyZ17OtXdLTpCWd7TE+6v7s6uwd5f5lJVTD5Y51DTMpStAfYNL4YzOoQp\n4TlIzqL/KnpNxzPBf1MQd7fvhaYfR0ZrXCAPiPOBrsAbQD8R4zSC24n5zDz5BMn5\nhHPqXGQLAgMBAAECggEATtEEJNtMykOZZGvpimoURLFPK5NuJZaDEVveAQelf/lK\nHzpdn6E7RD2qqHdZIO+wna7JHhzVTloSoPAuJbPPHuoyAF9gRvruBsL2lVy73in/\nCkvx8eI+3bRcIoc2ZbqLbIX9MCUOWFJGw7seykqVxn8HHIpcmYOv5PZ/uVWtP8hW\nNya4e7O8nAUL47Hyhy4r6+SRPdBPdSnEGVstN0pq6/W3E12qVPaUN0UFeE/26oTW\na7xMM47sC3QLC1FNav7VJH0fkd3ocgm3OUzplBSdLS97JpldRlKWQbT91VOAreML\n5lQRPRFy/27HgjVG0mH2eUhJPV9wH+r2oD7XlnSlEQKBgQD8mxNNn8SHO5OsVkm7\nEyB+gu4BVNg7SF9UHnMtqAIm0JSu2Gkui39/aqqPm1VPDqwuuTm0SvD8r+dSS0zA\nWEkHLsNSm6UXtW4VM7FUk0TUjcUM8O3iAvIzbbLW5IKG+DAI+6oxqwnCKb4PecX7\nvjoAsrWzDPPuxSryTI8f29vytwKBgQDuystEeaxvxlgEKpyENARTB1mCIFG9M7kJ\nWxB0j3Sh8+h0PYpsOONFM9TPTqm6t3ln7ChuSB4ATPIfsx7Rc6VUX5lfv2QOCJ85\nyuheVUm0Q4SsSBRvAzHd4vV2xYmIYGKWYaikCeSIGVmXjwp4rMDOCdm3v+CsMVbV\nvxCoAS+1TQKBgQDMFS3fRPkumL+SOJSRA7749yb7BGU+YBZEi+VaOaajXVkCee1g\noWt8sdzi8QhXOu95QESSmQlh3WvyXMvBipJVrz42+3DCWt55Wq4mOmUdpPxSnERU\nmTS8wCAA5dVe3h1Q5KJ4Rks4Byl6r1N5NBMAhWGvKwPZIIq1/4ySnLpyuQKBgQCF\nbfOe044y9tV/nn/Or3IrItQ1DfIekqQ2QhgzyWUWib++FBUg27jClm+3VvEoUBUa\nqK7+0HVTHau9Ys05pDEhsDl3cu5pmQ+/r02gSG/itkeQLMaeMV7P6V3XfBGZjqIH\n/ZHJ920nT2LseRUU0RL7Di4FqsXT8c3fqd+YwPDzkQKBgEWiAz5bKrwDrzHQeLDP\nHVJBUlLu4J9p3Vj99bGfkxS461rKXbshepYI1t07jS1IF0GSb4h8EGF0WDdpPhzY\n38iHeuPjqE0XJ+psi5yelR3jDP5DbXx3iq9LKl+WSiZWPDWggjqaBcnO8IbqDQyc\nffiifolQzO68w8IPvnbpcb/G\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-abqxy@hackathongarden.iam.gserviceaccount.com",
    "client_id": "108069001726718381783",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-abqxy%40hackathongarden.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);