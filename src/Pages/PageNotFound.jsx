const PageNotFound = () => {    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '18px', marginBottom: '30px' }}>
                Oops! The page you are looking for does not exist.
            </p>
            <a

                href="/"
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',

                    backgroundColor: '#007BFF',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: '18px'
                }}
            >
                Go to Home
            </a>
        </div>
    );
}       
export default PageNotFound;