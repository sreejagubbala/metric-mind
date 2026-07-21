from typing import Optional
from pydantic import BaseModel
class LoginRequest(BaseModel):
    username: str
    password: str
class AIQueryRequest(BaseModel):
    query: str
class UserCreate(BaseModel):
    username: str
    role: str = "user"
class QueryResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None