const fs = require('fs-extra')

const dir1 = 'Homework_2/New_folder_1'
fs.ensureDirSync(dir1)

const file = 'Homework_2/New_folder_1/file.txt'
fs.ensureFileSync(file)

const dir2 = 'Homework_2/New_folder_2'
fs.ensureDirSync(dir2)

fs.moveSync('Homework_2/New_folder_1/file.txt', 'Homework_2/New_folder_2/file.txt', {overwrite: true})

const dir3 = 'Homework_2/New_folder_3'
fs.ensureDirSync(dir3)

fs.copySync('Homework_2/New_folder_2/file.txt', 'Homework_2/New_folder_3/file.txt', {overwrite: true})

fs.removeSync('Homework_2/New_folder_2/file.txt')
fs.removeSync('Homework_2/New_folder_3/file.txt')

fs.removeSync('Homework_2/New_folder_1') 
fs.removeSync('Homework_2/New_folder_2') 
fs.removeSync('Homework_2/New_folder_3')







