#!/bin/bash

echo "🚀 Starting HospiceConnect Landing Page System"
echo "============================================="
echo ""

# Check if backend is already running
if lsof -ti:5001 > /dev/null 2>&1; then
    echo "✅ Backend already running on port 5001"
else
    echo "🔧 Starting Backend..."
    cd backend
    npm start &
    BACKEND_PID=$!
    cd ..
    echo "✅ Backend starting (PID: $BACKEND_PID)"
fi

echo ""

# Check if frontend is already running
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "✅ Frontend already running on port 3000"
else
    echo "🔧 Starting Frontend..."
    npm run dev &
    FRONTEND_PID=$!
    echo "✅ Frontend starting (PID: $FRONTEND_PID)"
fi

echo ""
echo "============================================="
echo "🎉 System Started!"
echo "============================================="
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:5001"
echo ""
echo "Press Ctrl+C to stop all servers"
echo "============================================="

wait
