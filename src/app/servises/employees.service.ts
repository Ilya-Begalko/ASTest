import { Injectable } from '@angular/core';

export interface Employee {
  ID?: number;

  //IputData
  Model?: string;
  Name?: string;
  Description?: string;
  Pi300?: number;
  Pi400?: number;

  //OutputData
  Product?: string;
  Consumption300?: string;
  ConsumptionValue300?: number;
  LabDimension300?: string;
  LabDimensionValue300?: number;
  Consumption400?: string;
  ConsumptionValue400?: number;
  LabDimension400?: string;
  LabDimensionValue400?: number;
}

const inputData: Employee[] = [
  {
    ID: 1,
    Model: "Оценка сырья С300",
    Name: "AR10:PR143",
    Description:"Давление верха колонны 10DT132",
    Pi300: 1,
  },
  {
    ID: 1,
    Name: "AR10:TI108",
    Description: "Температура куба колонны 10DT132",
    Pi300: 2,
  },
  {
    ID: 1,
    Name: "Лаб.измерения: С100 Фр.85-140 оС",
    Description: "Плотность при 15 °С",
    Pi300: 3,
  },
  {
    ID: 1,
    Name: "",
    Description: "Начало кипения",
    Pi300: 4,
  },
  {
    ID: 1,
    Name: "",
    Description: "10%",
    Pi300: 4,
  },
  {
    ID: 1,
    Name: "",
    Description: "50%",
    Pi300: 4,
  },
  {
    ID: 1,
    Name: "",
    Description: "90%",
    Pi300: 4,
  },
  {
    ID: 1,
    Name: "",
    Description: "Конец кипения",
    Pi300: 4,
  },
  {
    ID: 2,
    Model: "Оценка сырья С300",
    Name: "AR31:FRC99",
    Description: "Поток 1 стабильного гидрогенизата",
    Pi300: 5,
  },
  {
    ID: 2,
    Name: "AR31:TI99",
    Description: "Температура потока 1 стаб. гидрогенизата",
    Pi300: 6,
  },
  {
    ID: 2,
    Name: "AR31:FRC101",
    Description: "Поток 2 стабильного гидрогенизата",
    Pi300: 7,
  },
  {
    ID: 2,
    Name: "AR31:TI101",
    Description: "Температура потока 2 стаб. гидрогенизата",
    Pi300: 8,
  },
  {
    ID: 2,
    Name: "AR31:FR104",
    Description: "Расход циркуляционного ВСГ",
    Pi300: 9,
  },
  {
    ID: 2,
    Name: "AR31:TI133",
    Description: "Температура циркуляционного ВСГ",
    Pi300: 10,
  },
  {
    ID: 2,
    Name: "AR31:PR106",
    Description: "Давление циркуляционного ВСГ",
    Pi300: 11,
  },
  {
    ID: 2,
    Name: "AR31:TIC66",
    Description: "Температура сырья на выходе из 31BH312",
    Pi300: 12,
  },
  {
    ID: 2,
    Name: "AR31:TIC72",
    Description: "Температура сырья на выходе из 31BH314",
    Pi300: 13,
  },
  {
    ID: 2,
    Name: "AR31:TRC230",
    Description: "Температура сырья на выходе из 31BH315",
    Pi300: 14,
  },
  {
    ID: 2,
    Name: "AR31:TIC70",
    Description: "Температура сырья на выходе из 31BH313",
    Pi300: 15,
  },
  {
    ID: 2,
    Name: "Лаб.измерения: С300 Циркуляционный ВСГ",
    Description: "Об. доля H2",
    Pi300: 16,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля метана ",
    Pi300: 17,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля этана",
    Pi300: 18,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля этилена",
    Pi300: 19,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля пропана",
    Pi300: 20,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля н-бутана",
    Pi300: 21,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля н-бутилена",
    Pi300: 22,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля изобутана",
    Pi300: 23,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля изобутилена",
    Pi300: 24,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля бутиленов",
    Pi300: 25,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля н-пентана",
    Pi300: 26,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля изопентана",
    Pi300: 27,
  },
  {
    ID: 2,
    Name: "",
    Description: "Об. доля УВ C6+",
    Pi300: 28,
  },
  {
    ID: 2,
    Name: "Лаб.измерения: С300 Отработанный катализатор",
    Description: "МД углерода",
    Pi300: 29,
  },
  {
    ID: 2,
    Name: "",
    Description: "Содержание хлора",
    Pi300: 29,
  },
  {
    ID: 3,
    Model: "Теплообменник 31ET312",
    Name: "AR31:FRC99",
    Description: "Поток 1 стабильного гидрогенизата",
    Pi300: 30,
  },
  {
    ID: 3,
    Name: "AR31:FRC101",
    Description: "Поток 2 стабильного гидрогенизата",
    Pi300: 31,
  },
  {
    ID: 3,
    Name: "AR31:TI112",
    Description: "Температура потока газопродуктовой смеси после АВО 31EA311A",
    Pi300: 32,
  },
  {
    ID: 3,
    Name: "AR31:TI114",
    Description: "Температура потока газопродуктовой смеси после АВО 31EA311В",
    Pi300: 33,
  },
  {
    ID: 3,
    Name: "AR95:TT200",
    Description: "Температура воды охлаждения",
    Pi300: 34,
  },
  {
    ID: 3,
    Name: "Meteo:T1",
    Description: "Температура окружающей среды",
    Pi300: 35,
  },
  {
    ID: 4,
    Model: "Сепаратор 31DB311",
    Name: "AR31:PRC120",
    Description: "Давление в сепараторе 31DB311",
    Pi300: 36,
  },
  {
    ID: 5,
    Model: "Сепаратор 31DB322",
    Name: "AR31:PRC120",
    Description: "Давление в сепараторе 31DB311",
    Pi300: 37,
  },
  {
    ID: 5,
    Name: "AR31:FRC248",
    Description: "Расход циркуляционного ВСГ",
    Pi300: 38,
  },
  {
    ID: 5,
    Name: "AR31:PRC157",
    Description: "Давление в сепараторе 31DB322",
    Pi300: 39,
  },
  {
    ID: 5,
    Name: "AR95:TT200",
    Description: "Температура воды охлаждения",
    Pi300: 40,
  },
  {
    ID: 6,
    Model: "Сепаратор 31DB323",
    Name: "AR31:TI161",
    Description: "Температура питания сепаратора 31DB323",
    Pi300: 41,
  },
  {
    ID: 6,
    Name: "AR31:PRC172",
    Description: "Давление в сепараторе 31DB323",
    Pi300: 42,
  },
  {
    ID: 7,
    Model: "Температура питания колонны 31DT331",
    Name: "AR31:TRC260",
    Description: "Температура нестабильного платформата до смешения с углеводородами",
    Pi300: 43,
  },
  {
    ID: 8,
    Model: "Колонна 31DT331",
    Name: "AR80:FRCQ114",
    Description: "Расход рефлюкса от секции С800",
    Pi300: 44,
  },
  {
    ID: 8,
    Name: "AR80:TI115",
    Description: "Температура рефлюкса от секции С800",
    Pi300: 45,
  },
  {
    ID: 8,
    Name: "AR31:TI262",
    Description: "Температура питания колонны",
    Pi300:46,
  },
  {
    ID: 8,
    Name: "AR31:PRC195",
    Description: "Давление верха колонны",
    Pi300:47,
  },
  {
    ID: 8,
    Name: "AR31:TRC183",
    Description: "Температура на 8й (контрольной) тарелке",
    Pi300:48,
  },
  {
    ID: 8,
    Name: "AR31:TI187",
    Description: "Температура на выходе ребойлера",
    Pi300:49,
  },
  {
    ID: 8,
    Name: "AR31:TI179",
    Description: "Температура, при которой измеряется расход куба",
    Pi300:50,
  },
  {
    ID: 8,
    Name: "AR31:TI202",
    Description: "Температура на выходе емкости орошения",
    Pi300:47,
  },
  {
    ID: 8,
    Name: "AR31:PI201",
    Description: "Давление в емкости орошения",
    Pi300:52,
  },
  {
    ID: 8,
    Name: "AR31:FR194",
    Description: "Расход орошения в колонну",
    Pi300:53,
  },
  {
    ID: 8,
    Name: "Лаб.измерения: С800 Рефлюкс",
    Description: "МД суммы С1-С2",
    Pi300:54,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД суммы пропана+пропилена",
    Pi300:55,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД н-бутана",
    Pi300:56,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД изо-бутана",
    Pi300:57,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД суммы бутиленов",
    Pi300:58,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД н-пентана",
    Pi300: 59,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД изо-пентана",
    Pi300: 60,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД суммы С5",
    Pi300: 61,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД суммы С6+",
    Pi300: 62,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД бензола",
    Pi300: 63,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД толуола",
    Pi300: 64,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД этилбензола",
    Pi300: 65,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД мета-ксилола",
    Pi300: 66,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД орто-ксилола",
    Pi300: 67,
  },
  {
    ID: 8,
    Name: "",
    Description: "МД пара-ксилола",
    Pi300: 68,
  },
  {
    ID: 9,
    Model: "Колонна 40DT411",
    Name: "AR31:TI179",
    Description: "Температура питания колонны",
    Pi400:69,
  },
  {
    ID: 9,
    Name: "AR40:PR212",
    Description: "Давление верха колонны",
    Pi400:70,
  },
  {
    ID: 9,
    Name: "AR40:TIC15",
    Description: "Температура на 12й (контрольной) тарелке",
    Pi400:71,
  },
  {
    ID: 9,
    Name: "AR40:TI27",
    Description: "Температура на выходе печи 40BH411",
    Pi400:72,
  },
  {
    ID: 9,
    Name: "AR40:TI81",
    Description: "Температура на выходе АВО 40EA411",
    Pi400:73,
  },
  {
    ID: 9,
    Name: "AR40:FRC74",
    Description: "Расход орошения в колонну",
    Pi400:74,
  },
  {
    ID: 9,
    Name: "AR40:TI72",
    Description: "Температура, при которой измеряется расход куба",
    Pi400:75,
  },
  {
    ID: 10,
    Model: "Блок экстракции",
    Name: "AR40:FRC62",
    Description: "Расход сырья блока экстракции",
    Pi400: 76,
  },
  {
    ID: 10,
    Name: "AR40:TI270",
    Description: "Температура сырья блока экстракции",
    Pi400: 77,
  },
  {
    ID: 10,
    Name: "AR91:FRC50",
    Description: "Расход рефлюкса с секкции С900А",
    Pi400: 78,
  },
  {
    ID: 10,
    Name: "AR91:TRC54",
    Description: "Температура рефлюкса с секкции С900А",
    Pi400: 79,
  },
  {
    ID: 10,
    Name: "Лаб.измерения: С400 Сырье блока экстракции",
    Description: "МД нафтены+парафины",
    Pi400: 85,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД бензола",
    Pi400: 80,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД толуола",
    Pi400: 81,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД аром. С8",
    Pi400: 82,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД аром. С9",
    Pi400: 83,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД аром. С10",
    Pi400: 84,
  },
  {
    ID: 10,
    Name: "Лаб.измерения: С900А Рефлюкс",
    Description: "МД нафтены+парафины",
    Pi400: 85,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД бензола",
    Pi400: 86,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД толуола",
    Pi400: 87,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД аром. С8",
    Pi400: 88,
  },
  {
    ID: 10,
    Name: "",
    Description: "МД аром. С9",
    Pi400: 89,
  }];

const outputData: Employee[] = [
  {
    ID: 301,
    Product: "Товарный ВСГ (Сырьевой)",
    Consumption300: "AR31:FR166",
    ConsumptionValue300: 1,
    LabDimension300: "Плотн. газа при 20 °С",
    LabDimensionValue300: 2,
  },
  {
    ID: 301,
    LabDimension300: "МД H2",
    LabDimensionValue300: 3,
  },
  {
    ID: 301,
    LabDimension300: "ОбД H2",
    LabDimensionValue300: 4,
  },
  {
    ID: 302,
    Product: "Стабильный платформат",
    Consumption300: "AR31:FRC179",
    ConsumptionValue300: 5,
    LabDimension300: "Плотн. при 15 °С",
    LabDimensionValue300: 6,
  },
  {
    ID: 302,
    LabDimension300: "МД нафтены+ парафины",
    LabDimensionValue300: 7,
  },
  {
    ID: 302,
    LabDimension300: "МД бензола",
    LabDimensionValue300: 8,
  },
  {
    ID: 302,
    LabDimension300: "МД толуола",
    LabDimensionValue300: 9,
  },
  {
    ID: 302,
    LabDimension300: "МД этилбензола",
    LabDimensionValue300: 10,
  },
  {
    ID: 302,
    LabDimension300: "МД мета-ксилола",
    LabDimensionValue300: 11,
  },
  {
    ID: 302,
    LabDimension300: "МД орто-ксилола",
    LabDimensionValue300: 12,
  },
  {
    ID: 302,
    LabDimension300: " МД пара-ксилола",
    LabDimensionValue300: 13,
  },
  {
    ID: 302,
    LabDimension300: "МД аром. С8",
    LabDimensionValue300: 14,
  },
  {
    ID: 302,
    LabDimension300: "МД аром. C9",
    LabDimensionValue300: 15,
  },
  {
    ID: 302,
    LabDimension300: "МД аром. C10",
    LabDimensionValue300: 16,
  },
  {
    ID: 303,
    Product: "Газ сухой углеводородный",
    Consumption300: "AR31:FR200",
    ConsumptionValue300: 17,
    LabDimension300: "Плотн. газа при 20 °С",
    LabDimensionValue300: 18,
  },
  {
    ID: 303,
    LabDimension300: "МД суммы С5",
    LabDimensionValue300: 19,
  },
  {
    ID: 303,
    LabDimension300: "МД суммы С6+",
    LabDimensionValue300: 20,
  },
  {
    ID: 304,
    Product: "Рефлюкс",
    Consumption300: "AR31:FRC190",
    ConsumptionValue300: 21,
    LabDimension300: "Плотн. при 20 °С",
    LabDimensionValue300: 22,
  },
  {
    ID: 304,
    LabDimension300: "МД метана",
    LabDimensionValue300: 23,
  },
  {
    ID: 304,
    LabDimension300: "МД этана",
    LabDimensionValue300: 24,
  },
  {
    ID: 304,
    LabDimension300: "МД суммы С3",
    LabDimensionValue300: 25,
  },
  {
    ID: 304,
    LabDimension300: "МД суммы С4",
    LabDimensionValue300: 26,
  },
  {
    ID: 304,
    LabDimension300: "МД суммы С5",
    LabDimensionValue300: 27,
  },
  {
    ID: 304,
    LabDimension300: "МД суммы С6+",
    LabDimensionValue300: 28,
  },
  {
    ID: 401,
    Product: "Легкий платформат",
    Consumption400: "AR40:FR73",
    ConsumptionValue400: 29,
    LabDimension400: "Плотн. при 20 °С",
    LabDimensionValue400: 30,
  },
  {
    ID: 401,
    LabDimension400: "МД нафтены+ парафины",
    LabDimensionValue400: 31,
  },
  {
    ID: 401,
    LabDimension400: "МД бензола",
    LabDimensionValue400: 32,
  },
  {
    ID: 401,
    LabDimension400: "МД толуола",
    LabDimensionValue400: 33,
  },
  {
    ID: 401,
    LabDimension400: "МД аром. С8",
    LabDimensionValue400: 34,
  },
  {
    ID: 401,
    LabDimension400: "МД аром. C9",
    LabDimensionValue400: 35,
  },
  {
    ID: 401,
    LabDimension400: "МД аром. C10",
    LabDimensionValue400: 36,
  },
  {
    ID: 402,
    Product: "Фракция ксилольная (тяжелый платформат)",
    Consumption400: "AR40:FRC60",
    ConsumptionValue400: 37,
    LabDimension400: "Плотн. при 20 °С",
    LabDimensionValue400: 38,
  },
  {
    ID: 402,
    LabDimension400: "МД нафтены+ парафины",
    LabDimensionValue400: 39,
  },
  {
    ID: 402,
    LabDimension400: "МД бензола",
    LabDimensionValue400: 40,
  },
  {
    ID: 402,
    LabDimension400: "МД толуола",
    LabDimensionValue400: 41,
  },
  {
    ID: 402,
    LabDimension400: "МД этилбензола",
    LabDimensionValue400: 42,
  },
  {
    ID: 402,
    LabDimension400: "МД мета-ксилола",
    LabDimensionValue400: 43,
  },
  {
    ID: 402,
    LabDimension400: "МД орто-ксилола",
    LabDimensionValue400: 44,
  },
  {
    ID: 402,
    LabDimension400: "МД пара-ксилола",
    LabDimensionValue400: 45,
  },
  {
    ID: 402,
    LabDimension400: "МД аром. С8",
    LabDimensionValue400: 46,
  },
  {
    ID: 402,
    LabDimension400: "МД аром. C9",
    LabDimensionValue400: 47,
  },
  {
    ID: 402,
    LabDimension400: "МД аром. C10",
    LabDimensionValue400: 48,
  },
  {
    ID: 403,
    Product: "Бензин-рафинат",
    Consumption400: "AR40:FR101",
    ConsumptionValue400: 49,
    LabDimension400: "Плотн. при 15 °С",
    LabDimensionValue400: 50,
  },
  {
    ID: 403,
    LabDimension400: "МД нафтены+ парафины",
    LabDimensionValue400: 51,
  },
  {
    ID: 404,
    Product: "Экстракт бензол-толуольный (на С - 900А)",
    Consumption400: "AR40:FR216",
    ConsumptionValue400: 52,
    LabDimension400: "Плотн. при 15 °С",
    LabDimensionValue400: 53,
  },
  {
    ID: 404,
    LabDimension400: "МД нафтены+ парафины",
    LabDimensionValue400: 54,
  },
  {
    ID: 404,
    LabDimension400: "МД бензола",
    LabDimensionValue400: 55,
  },
  {
    ID: 404,
    LabDimension400: "МД толуола",
    LabDimensionValue400: 56,
  },
  {
    ID: 404,
    LabDimension400: "МД аром. С8",
    LabDimensionValue400: 57,
  },
  {
    ID: 404,
    LabDimension400: "МД аром. C9",
    LabDimensionValue400: 58,
  }];

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  getInputData(): Employee[] {
    return inputData;
  }
  getOutputData(): Employee[] {
    return outputData;
  }
}
