/**
 * @description 求一个日期距离现在的天数差
 * @param {string|Date} date 目标日期
 * @return {number} 
 */
export function getDayDifference(date:string|Date){

    const dateObj =  new Date(date);

    // 获取当前日期对象  
    const now = new Date();  
    
    // 计算日期差（以毫秒为单位）  
    const diff = now.getTime() - dateObj.getTime() ;  
    console.log(diff)
    // 将差值转换为天数  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));  
    
    return days;  
}


