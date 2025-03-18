#! /usr/bin/env bash

set -e
set -x

# source /backend/.venv/Scripts/Activate

# Let the DB start
python backend/src/backend_pre_start.py

# Run migrations
# alembic upgrade head

# Create initial data in DB
python backend/src/initial_data.py