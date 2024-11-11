import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6>CareerConnect</h6>
                <p>
                Slogan:<br></br>
                Your Path to the Right Job,<br></br>
                Your Bridge to the Right Talent<br></br>
                Anne Maliik Dave
                </p>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Add Job
                  </a>
                </p>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> Moringa,  Ngong Lane, KE
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  CareerConnect@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4">
          © 2024 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
