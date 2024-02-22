/**
 * 任务优先级
 */
 export enum TaskPriority{
    Top='top', //重要且优先
    Second='second', //优先但不重要
    Third='third', //重要但不优先
    Fourth='fourth' //不重要不优先
 } 
 /**
 * 任务详情
 */
  export interface TaskItem {
    tid:number
    taskName:string
    taskPriority:TaskPriority 
    taskDate:string[]|string //任务日期
    taskTime: string[]|string //任务时间
    isCircular:boolean
    isMention:boolean
    taskDescription:string
    belongTo:object
  }
