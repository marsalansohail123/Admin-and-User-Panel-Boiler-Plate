import { getDatabase, ref, set, push, onValue } from "firebase/database";
import app from "./firebaseconfig";

const dbStuData = getDatabase(app);

function writeToDatabase(obj) {
    return new Promise((resolve, reject) => {
        const reference = ref(dbStuData, 'students')
        const NewRef = push(reference).key;
        const send = ref(dbStuData, `students/${NewRef}`);
        obj.id = NewRef;
        set(send, obj)
            .then(() => {
                resolve("Registration Complete")
            })
            .catch((err) => {
                reject(err)
            })
    })
};

function addCourse(obj) {
    return new Promise((resolve, reject) => {
        const reference = ref(dbStuData, 'course data')
        const NewRef = push(reference).key;
        const send = ref(dbStuData, `course data/${NewRef}`);
        set(send, obj)
            .then(() => {
                resolve("Course Add Successfully")
            })
            .catch((err) => {
                reject(err)
            })
    })
};

const ReadFromDatabase = (nodeName, id) => {
    // console.log(`nodeName=======>`, nodeName)
    // console.log(`id=====>`, id && id)
    return new Promise((resolve, reject) => {
        const reference = ref(dbStuData, `${nodeName}/${id || ""}`)
        onValue(reference, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                resolve(data)
                return
            } else {
                reject('error')
                return
            }
        })
    })
}

export {
    writeToDatabase,
    ReadFromDatabase,
    addCourse,
}