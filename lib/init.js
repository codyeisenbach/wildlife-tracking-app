import Appconfig from '../credentials/client'

export default async () => {
    const firebase = await import('firebase/app')

    try {
        firebase.initializeApp(Appconfig)
    } catch (err) {

        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack)
        }
    }

    return firebase
}