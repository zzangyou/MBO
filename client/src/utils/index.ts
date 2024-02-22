/**
 * @description 求一个日期距离现在的天数差
 * @param {string|Date} date1 date2 目标日期
 * @return {number} 
 */
export function getDayDifference(date1: Date | null, date2: Date | null): number|null {  
    // 如果只给了一个参数，则使用当前日期作为第二个参数  
    console.log(date1,date2)
    if (date1 && !date2) {  
      date2 = new Date();  
      date1 = new Date(date1); 
    } else if (!date1 && date2) {  
      date1 = new Date();  
      date2 = new Date(date2); 
    }  
    
    // 确保两个日期都是有效的  
    if (!date1 || !date2) {  
      return null;  
    }  
    date1 = new Date(date1); 
    date2 = new Date(date2); 
    // 计算两个日期之间的毫秒差值  
    const diff = Math.abs(date2.getTime() - date1.getTime());  
    console.log(diff,'>>>>>>>diff')
    // 转换为天数差值  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));  
    console.log(days,'>>>>>>>days')
    return days;  
  }

