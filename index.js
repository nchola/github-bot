// // const jsonfile = require('jsonfile');

// // const moment = require('moment');

// // const simpleGit = require('simple-git');

// // const FILE_PATH = './data.json';

// // const DATE = moment().subtract(1,'y').add(1, 'd').format();

// // const data = {
// //     date: DATE
// // }

// // //git commit --dates
// // jsonfile.writeFile(FILE_PATH, data, ()=>{
// //     simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();
// // });




// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');

// const FILE_PATH = './data.json';

// const makeCommit = (x, y) => {
//     const DATE = moment().subtract(1, 'y').add(1, 'd')
//                     .add(x, 'w').add(y,'d').format();

//     const data = {
//         date: DATE
//     }
//     jsonfile.writeFile(FILE_PATH, data, (err) => {
//         if (err) {
//             console.error('Gagal menulis ke file:', err);
//             return;
//         }

//         console.log('Data berhasil ditulis ke file.');

//         simpleGit()
//             .add([FILE_PATH])
//             .commit(DATE, { '--date': DATE }, (commitErr) => {
//                 if (commitErr) {
//                     console.error('Gagal melakukan komit:', commitErr);
//                     return;
//                 }
//                 console.log('Perubahan berhasil di-komit.');

//                 // Push ke repositori Git
//                 simpleGit().push((pushErr) => {
//                     if (pushErr) {
//                         console.error('Gagal melakukan push:', pushErr);
//                         return;
//                     }
//                     console.log('Perubahan berhasil di-push.');
//                 });
//             });
//     });
// }
// makeCommit(2,30)




// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');

// const FILE_PATH = './data.json';

// const makeCommit = (numCommits, daysToAdd) => {
//     // Rekursi untuk membuat banyak commit
//     const commitRecursive = (n) => {
//         if (n === 0) {
//             console.log('Semua commit berhasil dibuat.');
//             return;
//         }

//         const DATE = moment().subtract(1, 'y').add(1, 'd')
//             .add(daysToAdd, 'd').format();

//         const data = {
//             date: DATE
//         }

//         jsonfile.writeFile(FILE_PATH, data, (err) => {
//             if (err) {
//                 console.error('Gagal menulis ke file:', err);
//                 return;
//             }

//             console.log('Data berhasil ditulis ke file.');

//             simpleGit()
//                 .add([FILE_PATH])
//                 .commit(DATE, { '--date': DATE }, (commitErr) => {
//                     if (commitErr) {
//                         console.error('Gagal melakukan komit:', commitErr);
//                         return;
//                     }
//                     console.log('Perubahan berhasil di-komit.');

//                     // Panggil rekursi untuk membuat commit berikutnya
//                     commitRecursive(n - 1);
//                 });
//         });
//     }

//     // Memulai proses rekursi
//     commitRecursive(numCommits);
// }

// // Panggil fungsi makeCommit untuk membuat 5 commit dengan penambahan 30 hari di setiap commit
// makeCommit(15,30);



// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');

// const FILE_PATH = './data.json';

// const makeCommit = (x, y) => {
//     const DATE = moment().subtract(1, 'y').add(1, 'd')
//                     .add(x, 'w').add(y,'d').format();

//     const data = {
//         date: DATE
//     }
//     jsonfile.writeFile(FILE_PATH, data, (err) => {
//         if (err) {
//             console.error('Gagal menulis ke file:', err);
//             return;
//         }

//         console.log('Data berhasil ditulis ke file.');

//         simpleGit()
//             .add([FILE_PATH])
//             .commit(DATE, { '--date': DATE }, (commitErr) => {
//                 if (commitErr) {
//                     console.error('Gagal melakukan komit:', commitErr);
//                     return;
//                 }
//                 console.log('Perubahan berhasil di-komit.');

//                 // Push ke repositori Git
//                 simpleGit().push((pushErr) => {
//                     if (pushErr) {
//                         console.error('Gagal melakukan push:', pushErr);
//                         return;
//                     }
//                     console.log('Perubahan berhasil di-push.');
//                 });
//             });
//     });
// }

// // Misalnya, untuk membuat 5 komit sekaligus
// for (let i = 0; i < 5; i++) {
//     makeCommit(8, 30); // Ganti parameter x dan y sesuai kebutuhan
// }

// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');

// const FILE_PATH = './data.json';

// const makeCommit = (numCommits, daysToAdd) => {
//     // Tanggal awal
//     let currentDate = moment().subtract(1, 'y').add(1, 'd');
    
//     // Loop untuk membuat commit
//     for (let i = 0; i < numCommits; i++) {
//         // Tambahkan tanggal ke tanggal saat ini
//         currentDate.add(daysToAdd, 'd');
        
//         // Format tanggal
//         const DATE = currentDate.format();

//         const data = {
//             date: DATE
//         };

//         // Tulis data ke file
//         jsonfile.writeFile(FILE_PATH, data, (err) => {
//             if (err) {
//                 console.error('Gagal menulis ke file:', err);
//                 return;
//             }

//             console.log('Data berhasil ditulis ke file.');

//             // Lakukan commit
//             simpleGit()
//                 .add([FILE_PATH])
//                 .commit(DATE, { '--date': DATE }, (commitErr) => {
//                     if (commitErr) {
//                         console.error('Gagal melakukan komit:', commitErr);
//                         return;
//                     }
//                     console.log('Perubahan berhasil di-komit.');
//                 });
//         });
//     }
//     console.log(`${numCommits} commit berhasil dibuat dengan penambahan ${daysToAdd} hari.`);
// };

// // Panggil fungsi makeCommit untuk membuat 5 commit dengan penambahan 30 hari di setiap commit
// makeCommit(2, 4);


 // Fungsi bot kontribusi 1
const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

const makeCommit = (numCommits) => {
    // Rekursi untuk membuat banyak commit
    const commitRecursive = (n, date) => {
        if (n === 0) {
            console.log('Semua commit berhasil dibuat.');
            return;
        }

        const data = {
            date: date.format()
        }

        jsonfile.writeFile(FILE_PATH, data, (err) => {
            if (err) {
                console.error('Gagal menulis ke file:', err);
                return;
            }

            console.log('Data berhasil ditulis ke file.');

            simpleGit()
                .add([FILE_PATH])
                .commit(date.format(), { '--date': date.format() }, (commitErr) => {
                    if (commitErr) {
                        console.error('Gagal melakukan komit:', commitErr);
                        return;
                    }
                    console.log('Perubahan berhasil di-komit.');

                    // Panggil rekursi untuk membuat commit berikutnya
                    commitRecursive(n - 1, date.add(1, 'd'));
                });
        });
    }

    // Tanggal yang diinginkan
    const desiredDate = moment('2024-01-01');

    // Memulai proses rekursi
    commitRecursive(numCommits, desiredDate);
}

// Panggil fungsi makeCommit untuk membuat sejumlah commit pada tanggal 13 Maret 2023
makeCommit(10);



// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');

// const FILE_PATH = './data.json';

// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const makeCommit = (startDate, endDate) => {
//     const currentDate = moment(startDate);

//     const commitRecursive = (endDate) => {
//         if (currentDate.isAfter(endDate)) {
//             console.log('Semua commit berhasil dibuat.');
//             return;
//         }

//         const numCommits = getRandomNumber(3, 6);

//         for (let i = 0; i < numCommits; i++) {
//             const data = {
//                 date: currentDate.format()
//             }

//             jsonfile.writeFile(FILE_PATH, data, (err) => {
//                 if (err) {
//                     console.error('Gagal menulis ke file:', err);
//                     return;
//                 }

//                 console.log('Data berhasil ditulis ke file.');

//                 simpleGit()
//                     .add([FILE_PATH])
//                     .commit(currentDate.format(), { '--date': currentDate.format() }, (commitErr) => {
//                         if (commitErr) {
//                             console.error('Gagal melakukan komit:', commitErr);
//                             return;
//                         }
//                         console.log('Perubahan berhasil di-komit.');
//                     });
//             });

//             currentDate.add(1, 'd');
//         }

//         // Panggil rekursi untuk membuat commit pada hari berikutnya
//         commitRecursive(endDate);
//     }

//     // Memulai proses rekursi
//     commitRecursive(endDate);
// }

// // Tanggal mulai dan selesai
// const startDate = moment('2024-01-01');
// const endDate = moment('2024-01-10');

// // Panggil fungsi makeCommit untuk membuat commit pada rentang tanggal tertentu
// makeCommit(startDate, endDate);
