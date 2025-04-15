const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

// Fungsi untuk mendapatkan angka random dalam rentang tertentu
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeCommit = async () => {
    try {
        // Fungsi untuk membuat commit pada tanggal tertentu
        const makeCommitsForDate = async (date, numCommits) => {
            const git = simpleGit();
            
            for (let i = 0; i < numCommits; i++) {
                const data = {
                    date: date.format(),
                    commit: i + 1
                };

                try {
                    await jsonfile.writeFile(FILE_PATH, data);
                    console.log(`Data berhasil ditulis ke file untuk tanggal ${date.format('YYYY-MM-DD')} commit ke-${i + 1}`);

                    await git.add([FILE_PATH]);
                    await git.commit(`Commit ${i + 1} pada ${date.format('YYYY-MM-DD')}`, { '--date': date.format() });
                    console.log(`Commit ${i + 1} berhasil dibuat untuk tanggal ${date.format('YYYY-MM-DD')}`);
                } catch (error) {
                    console.error('Error saat membuat commit:', error.message);
                }
            }
        };

        // Tanggal mulai dan akhir (1 bulan)
        const startDate = moment('2024-09-01');
        const endDate = moment(startDate).add(1, 'month');

        // Jumlah hari antara tanggal mulai dan akhir
        const totalDays = endDate.diff(startDate, 'days');

        console.log(`Akan membuat commit untuk ${totalDays} hari dari ${startDate.format('YYYY-MM-DD')} hingga ${endDate.format('YYYY-MM-DD')}`);

        // Proses pembuatan commit untuk setiap hari
        for (let i = 0; i <= totalDays; i++) {
            const currentDate = moment(startDate).add(i, 'days');
            // Random jumlah commit antara 0-20
            const numCommits = getRandomInt(0, 20);
            
            if (numCommits > 0) {
                console.log(`\nMembuat ${numCommits} commit untuk tanggal ${currentDate.format('YYYY-MM-DD')}`);
                await makeCommitsForDate(currentDate, numCommits);
            } else {
                console.log(`\nTidak ada commit untuk tanggal ${currentDate.format('YYYY-MM-DD')}`);
            }
        }
        
        console.log('\nSemua commit berhasil dibuat!');
    } catch (error) {
        console.error('Terjadi error:', error.message);
    }
};

// Jalankan fungsi utama
makeCommit().catch(error => {
    console.error('Error utama:', error.message);
});