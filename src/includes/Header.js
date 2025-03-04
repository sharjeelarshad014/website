import React from 'react';

function header() {
    return ( 
        <div>
            <header>
				<div className="container">
					<div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
						<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
							<span class="fs-4">Simple header</span>
						</a>
						<ul class="nav nav-pills">
							<li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
							<li class="nav-item"><a href="#" class="nav-link">Features</a></li>
							<li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
							<li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
							<li class="nav-item"><a href="#" class="nav-link">About</a></li>
						</ul>
					</div>
				</div>
			</header>
        </div>
    );
}

export default header;