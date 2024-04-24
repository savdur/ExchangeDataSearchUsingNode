// Data Model Interfaces
import * as fs from 'fs';
import { Exchange } from "./Exchange.Interface";

// Read from Json based on configuration settings
var configExchangeList = fs.readFileSync('./src/config.json', 'utf-8');
const configuredExchanges = JSON.parse(configExchangeList);
const fileData = fs.readFileSync('./src/Exchange/ExchangeData.json', 'utf-8');
const jsonData = JSON.parse(fileData);
var exchangeData = jsonData.exchanges.filter((exchange: Exchange) => configuredExchanges.ExchangesList.includes(exchange.name));

// Service Methods
export const getAverageMidPrice = async (): Promise<Number> => {
    const bidMax = Math.max(...exchangeData.filter((ex: Exchange) => ex.type == 'Bid').map((m: Exchange) => m.assets["USDT"]));
    const askMin = Math.min(...exchangeData.filter((ex: Exchange) => ex.type == 'Ask').map((m: Exchange) => m.assets["USDT"]));
    // get Average Mid Price
    const averageMidPrice = (bidMax + askMin) / 2;
    return averageMidPrice;
}
