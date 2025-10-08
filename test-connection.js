/**
 * Test script to verify frontend-backend connection
 * Run with: node test-connection.js
 */

const http = require('http');

const testEndpoint = (port, path, description) => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: path,
      method: 'GET',
      timeout: 3000
    };

    const req = http.request(options, (res) => {
      console.log(`✅ ${description}: ${res.statusCode}`);
      resolve(true);
    });

    req.on('error', (error) => {
      console.log(`❌ ${description}: ${error.message}`);
      resolve(false);
    });

    req.on('timeout', () => {
      console.log(`⏱️  ${description}: Timeout`);
      req.destroy();
      resolve(false);
    });

    req.end();
  });
};

const runTests = async () => {
  console.log('\n🔍 Testing Backend Connection...\n');
  
  const backendRunning = await testEndpoint(5001, '/api/admin/submissions', 'Backend API (port 5001)');
  
  if (backendRunning) {
    console.log('\n✅ Backend is running and accessible!');
  } else {
    console.log('\n❌ Backend is NOT running!');
    console.log('📝 Start backend with: cd backend && npm start\n');
  }
  
  console.log('\n🔍 Testing Frontend Connection...\n');
  
  const frontendRunning = await testEndpoint(3000, '/', 'Frontend (port 3000)');
  
  if (frontendRunning) {
    console.log('\n✅ Frontend is running!');
  } else {
    console.log('\n❌ Frontend is NOT running!');
    console.log('📝 Start frontend with: npm run dev\n');
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 CONNECTION STATUS SUMMARY');
  console.log('='.repeat(50));
  console.log(`Backend (port 5001): ${backendRunning ? '✅ RUNNING' : '❌ NOT RUNNING'}`);
  console.log(`Frontend (port 3000): ${frontendRunning ? '✅ RUNNING' : '❌ NOT RUNNING'}`);
  
  if (backendRunning && frontendRunning) {
    console.log('\n🎉 Everything is working! Your app should be accessible at:');
    console.log('   Frontend: http://localhost:3000');
    console.log('   Backend:  http://localhost:5001');
    console.log('\n💡 The Vite proxy will forward /api/* requests to backend automatically.');
  } else {
    console.log('\n⚠️  Some services are not running. Start them to use the app.');
  }
  console.log('='.repeat(50) + '\n');
};

runTests();

