export default defineEventHandler(async (event) => {

   const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=ODMcIUsj0kLjIPvG6MUzSh6Dukrgqde46JhiPCFu')

   return data
})