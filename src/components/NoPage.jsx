import React from 'react';

function NoPage() {
  return (
    <div className="container mt-5" style={{
      height: '90vh',
    }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="alert alert-danger text-center">
            <h1>404</h1>
            <p>Üzgünüz, Böyle bir sayfa bulunamadı.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
