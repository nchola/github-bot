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
    const desiredDate = moment('2025-01-01');

    // Memulai proses rekursi
    commitRecursive(numCommits, desiredDate);
}

// Panggil fungsi makeCommit untuk membuat sejumlah commit pada tanggal 13 Maret 2023
makeCommit(10);
