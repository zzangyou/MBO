/**
 * 目标状态
 */
export enum GoalStatus{
   progress='进行中', //进行中
   expired='已过期', //已过期
   accomplished='完成的', //完成的
   suspended='中止的'
} 

/**
 * 目标详情
 */
 export interface GoalItem {
    gid:number
    state:GoalStatus 
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

/**
 * 模板详情
 */
 export interface ModelItem extends GoalItem { 
    mid:number 
 } 
 /**
 * 已完成目标详情
 */
  export interface AccomplishedModelItem extends GoalItem { 
    timeCost:number //完成用时
    accomplishedDate:string

 } 