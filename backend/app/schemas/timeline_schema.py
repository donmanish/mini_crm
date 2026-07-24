from datetime import datetime

from pydantic import BaseModel



class TimelineResponse(BaseModel):

    id:int

    event:str

    created_at:datetime


    model_config={
        "from_attributes":True
    }