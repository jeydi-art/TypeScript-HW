type Temperature = { weekday: string, morning: number, day: number, evening: number };

const weekTemps: Temperature[] = [
    {weekday: 'Monday', morning: 12, day: 18, evening: 14},
    {weekday: 'Tuesday', morning: 10, day: 17, evening: null}, // нет данных вечером
    {weekday: 'Wednesday', morning: 9, day: 16, evening: 12},
    {weekday: 'Thursday', morning: 11, day: null, evening: 15}, // нет данных днём
    {weekday: 'Friday', morning: 13, day: 21, evening: 16},
    {weekday: 'Saturday', morning: null, day: 23, evening: 18}, // нет данных утром
    {weekday: 'Sunday', morning: 15, day: 22, evening: 17}
];