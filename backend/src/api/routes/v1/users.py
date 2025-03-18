import uuid
from typing import Any
from src.crud import user_crud
from fastapi import APIRouter, Depends, HTTPException

from src.api.deps import SessionDep
from src.models.user import (UserPublic, UserRegister, UserCreate)

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/signup", response_model=UserPublic)
def register_user(session: SessionDep, user_in: UserRegister) -> Any:
    """
    Create new user via self registraion
    """
    # user = user.get_user_by_email(session=session, email=user_in.email)
    # if user:
    #     raise HTTPException(
    #         status_code=400,
    #         detail="The user with this email already exists in the system",
    #     )
    user_create = UserCreate.model_validate(user_in)
    user = user_crud.create_user(session=session, user_create=user_create)
    return user