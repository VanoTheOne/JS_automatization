const fs = require('fs-extra')

const dir1 = 'C:/Users/van0t/JS-automatization/Homework_2/New_folder_1'
fs.ensureDirSync(dir1)

const file = 'C:/Users/van0t/JS-automatization/Homework_2/New_folder_1/file.txt'
fs.ensureFileSync(file)

const dir2 = 'C:/Users/van0t/JS-automatization/Homework_2/New_folder_2'
fs.ensureDirSync(dir2)

fs.moveSync('C:/Users/van0t/JS-automatization/Homework_2/New_folder_1/file.txt', 
'C:/Users/van0t/JS-automatization/Homework_2/New_folder_2/file.txt', { overwrite: true})

const dir3 = 'C:/Users/van0t/JS-automatization/Homework_2/New_folder_3'
fs.ensureDirSync(dir3)

fs.moveSync('C:/Users/van0t/JS-automatization/Homework_2/New_folder_2/file.txt', 
'C:/Users/van0t/JS-automatization/Homework_2/New_folder_3/file.txt', { overwrite: true})

fs.removeSync('C:/Users/van0t/JS-automatization/Homework_2/New_folder_3/file.txt')

fs.removeSync('C:/Users/van0t/JS-automatization/Homework_2/New_folder_1') 
fs.removeSync('C:/Users/van0t/JS-automatization/Homework_2/New_folder_2') 
fs.removeSync('C:/Users/van0t/JS-automatization/Homework_2/New_folder_3')







