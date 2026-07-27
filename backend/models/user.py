from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from backend.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(
        Integer,
        primary_key=True,
        index=True
    )
    username = Column(
        String(50),
        unique=True,
        index=True,
        nullable=False
    )
    email = Column(
        String(100),
        unique=True,
        index=True,
        nullable=False
    )
    hashed_password = Column(
        String(255),
        nullable=False
    )
    role = Column(
        String(20),
        default="user",
        nullable=False
    )
    is_active = Column(
        Boolean,
        default=True
    )