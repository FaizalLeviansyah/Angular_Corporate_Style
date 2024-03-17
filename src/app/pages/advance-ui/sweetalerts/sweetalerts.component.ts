import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalerts',
  templateUrl: './sweetalerts.component.html',
  styleUrls: ['./sweetalerts.component.scss']
})

/**
 * Sweetalerts Component
 */
export class SweetalertsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Advance UI' },
      { label: 'Sweet Alerts', active: true }
    ];
  }

  /**
   * Basic sweet alert
   * @param basicMessage modal content
   */
   basicMessage() {
    Swal.fire({text:'Any fool can use a computer',confirmButtonColor: '#364574',});
  }

  /**
  * Title sweet alert
  * @param titleText modal content
  */
   titleText() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      confirmButtonColor: '#364574',
      confirmButtonText: 'OK'
    });
  }

  /**
   * Success sweet alert
   * @param successmsg modal content
   */
   successmsg() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#364574',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'OK'
    });
  }

  /**
   * Confirm sweet alert
   * @param confirm modal content
   */
   modelTitle() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#364574',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire({title: 'Deleted!', text:'Your file has been deleted.', confirmButtonColor: '#364574',icon: 'success',});
      }
    });
  }

  /**
   * Confirm sweet alert
   * @param confirm modal content
   */
   confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#364574',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire({title: 'Deleted!', text:'Your file has been deleted.', confirmButtonColor: '#364574', icon: 'success',});
      }
    });
  }

  /**
   * cancel sweet alert
   * @param cancel modal content
   */
  cancel() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: '#364574',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: 'Deleted!',
            text:'Your file has been deleted.',
            confirmButtonColor: '#364574',
            icon:'success',
          }
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title:'Cancelled',
            text:'Your imaginary file is safe :)',
            confirmButtonColor: '#364574',
            icon:'error',
          }
          );
        }
      });
  }

  /**
   * imageHeader sweet alert
   * @param imageHeader modal content
   */
   imageHeader() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'assets/images/logo-sm.png',
      imageHeight: 50,
      confirmButtonColor: '#364574',
    });
  }

  /**
   * timer sweet alert
   * @param timer modal content
   */
   timer() {
    let timerInterval: any;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b: any = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }

  /**
   * custom sweet alert
   * @param custom modal content
   */
   custom() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonColor: 'rgb(71, 189, 154)',
      cancelButtonColor: 'rgb(243, 78, 78)',
    });
  }

  /**
   * position sweet alert
   * @param position modal content
   */
   position() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }

   /**
   * customBackground sweet alert
   * @param customBackground modal content
   */
    customBackground() {
      Swal.fire({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        confirmButtonColor: '#364574',
        background: 'rgb(224, 225, 243) url(assets/images/chat-bg-pattern.png)',
      });
    }

  /**
   * ajax sweet alert
   * @param ajax modal content
   */
   ajax() {
    Swal.fire({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      confirmButtonColor: '#556ee6',
      cancelButtonColor: '#f46a6a',
      preConfirm: (email) => {
        // eslint-disable-next-line no-unused-vars
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              Promise.reject(new Error('This email is already taken.'));
            } else {
              resolve();
            }
          }, 2000);
        });
      },
      allowOutsideClick: false,
    }).then((email) => {
      Swal.fire({
        icon: 'success',
        title: 'Ajax request finished!',
        confirmButtonColor: '#364574',
        html: 'Submitted email: ' + email,
      });
    });
  }

  /**
   * custom Three Btn alert
   * @param custom modal content
   */
   threeBtn() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Do you want to save the changes?',
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: 'Saved!',
            confirmButtonColor: '#364574',
            icon:'success',
          }
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title:'Cancelled',
            confirmButtonColor: '#364574',
            icon:'error',
          }
          );
        }
      });
  }

  /**
   * customBackground sweet alert
   * @param customBackground modal content
   */
   customImg() {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      confirmButtonText: 'ok',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
    });
  }

  /**
  * Title sweet alert
  * @param Success Msg modal content
  */
   SuccessMsg() {
    Swal.fire({
      title: 'Well done !',
      text: 'Aww yeah, you successfully read this important message.',
      icon: 'success',
      confirmButtonColor: '#364574',
      confirmButtonText: 'Back'
    });
  }



    /**
   * ajax sweet alert
   * @param ajax modal content
   */
     JoinCompany() {
      Swal.fire({
        imageUrl: 'assets/images/logo-sm.png',
        imageHeight: 50,
        confirmButtonColor: 'rgb(3, 142, 220)',
        title: 'Join Our Community',
        input: 'email',
        confirmButtonText: 'Register',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
          // eslint-disable-next-line no-unused-vars
          return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              if (email === 'taken@example.com') {
                Promise.reject(new Error('This email is already taken.'));
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false,
      }).then((email) => {
        Swal.fire({
          icon: 'success',
          title: 'Ajax request finished!',
          confirmButtonColor: 'rgb(3, 142, 220)',
          html: 'Submitted email: ' + email,
        });
      });
    }

  /**
  * Title sweet alert
  * @param Error Msg modal content
  */
   successModel(content:any) {
    this.modalService.open(content, { centered: true });
  }

  /**
  * Title sweet alert
  * @param Error Msg modal content
  */
    errorModel(content:any) {
    this.modalService.open(content, { centered: true });
  }

    /**
   * Confirm sweet alert
   * @param confirm modal content
   */
   warningModel(content:any) {
    this.modalService.open(content, { centered: true });
   }

   /**
   * Confirm sweet alert
   * @param confirm modal content
   */
    JoinModel(content:any) {
      this.modalService.open(content, { centered: true });
     }
     
    /**
   * ajax sweet alert
   * @param EmailVerification modal content
   */
     EmailVerification(content:any) {
      this.modalService.open(content, { centered: true });
    }

  /**
   * ajax sweet alert
   * @param notificationMsg modal content
   */
  notificationMsg(content:any) {
    this.modalService.open(content, { centered: true });
  }

}
