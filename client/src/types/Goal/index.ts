/**
 * 目标详情
 */
 export interface GoalItem {
    goalColor: string
    goalName: string
    goalTiming?:number // 目标计时
    completedTimes?:number // 完成次数
    goalProgress?:number 
    goalDescription?: string
    goalTime?: string[]
    goalEnd?:string 
    taskList:Object[]
  }


  interface ModelItem extends GoalItem { 
    mid:number 
 } 