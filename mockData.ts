
import { DriveFolder, FileType } from './types';

export const DRIVE_DATA: DriveFolder = {
  id: 'demo',
  name: 'База Знаний (Демо)',
  items: [
    {
      id: 'd1',
      name: '01_Регламенты',
      items: [
        { 
          id: 'df1', 
          name: 'Стандарт_внешнего_вида.pdf', 
          type: FileType.PDF, 
          url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' 
        },
        { 
          id: 'df2', 
          name: 'Скрипт_приветствия.txt', 
          type: FileType.TEXT, 
          url: '', 
          content: 'Добрый день! Я представитель банка, привез вашу карту. Подготовьте, пожалуйста, паспорт для сверки данных.' 
        }
      ]
    },
    {
      id: 'd2',
      name: '02_Обучающие_видео',
      items: [
        { 
          id: 'df3', 
          name: 'Инструкция_по_выдаче.mp4', 
          type: FileType.VIDEO, 
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' 
        }
      ]
    },
    {
      id: 'd3',
      name: '03_Памятки_клиенту',
      items: [
        { 
          id: 'df4', 
          name: 'Бонусы_и_кешбэк.png', 
          type: FileType.IMAGE, 
          url: 'https://picsum.photos/seed/bank/800/600' 
        }
      ]
    }
  ]
};
