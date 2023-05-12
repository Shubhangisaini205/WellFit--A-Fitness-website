interface Workout{id:Number,exercise_name:String,videoURL:string[],steps:string[],Category:String,Difficulty:String,Force:String,Grips:String,target:Object,youtubeURL:String,details:String}

export const GET_REQUEST="GET_REQUEST"
export const GET_REQUEST_SUCCESS="GET_REQUEST_SUCCESS"
export const GET_REQUEST_FAILURE="GET_REQUEST_FAILURE"

interface GetRequestAction {
    type: typeof GET_REQUEST;
}

interface GetRequestFailureAction {
    type: typeof GET_REQUEST_FAILURE;
}

interface GetRequestSuccessAction {
    type: typeof GET_REQUEST_SUCCESS;
    payload: {
      data: Workout[];
    };
}

export type WorkoutActionTypes =
  | GetRequestAction
  | GetRequestSuccessAction
  | GetRequestFailureAction;