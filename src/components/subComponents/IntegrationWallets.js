import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './subComponents.css';

export function IntegrationWallets(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='btn btn-secondary py-2' title="Connect Wallet" onClick={handleShow}>Connect Wallet
      </button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Connect to Any of these wallets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='container-fluid'>
                <div className="row wallet_btn py-3 mx-3 px-4 my-2" onClick={props.connectToMetaMask}> 
                      <div className="col text-start fs-5">MetaMask</div>
                      <div className="col text-end">
                        <img className="img-fluid wallet_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" alt="" />
                      </div>
                </div>
                {/* <div className="row wallet_btn py-3 mx-3 px-4 my-2" onClick={props.connectToWalletConnect}> 
                      <div className="col text-start fs-5">Connect Wallet</div>
                      <div className="col text-end">
                        <img className="img-fluid wallet_img" src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" alt="" />
                      </div>
                </div> */}
                <div className="row wallet_btn py-3 mx-3 px-4 my-2" onClick={props.connectToCoinBase}> 
                      <div className="col text-start fs-5">CoinBase Wallet</div>
                      <div className="col text-end">
                        <img className="img-fluid wallet_img" src="https://www.pngrepo.com/download/331345/coinbase-v2.png" alt="" />
                      </div>
                </div>
                <div className="row wallet_btn py-3 mx-3 px-4 my-2" onClick={props.connectToPortis}> 
                      <div className="col text-start fs-5">Portis Wallet</div>
                      <div className="col text-end">
                        <img className="img-fluid wallet_img" src="https://play-lh.googleusercontent.com/zNyG_6Xzgo0RoGESRbb73ao0ZKJeoNP05Qt8BHbXqEGyrb8-gsHPU3RAUQndT5y1PkBM" alt="" />
                      </div>
                </div>
                <div className="row wallet_btn py-3 mx-3 px-4 my-2" onClick={props.connectToFortmatic}> 
                      <div className="col text-start fs-5">Fortmatic Wallet</div>
                      <div className="col text-end">
                        <img className="img-fluid wallet_img" src="https://2510867812-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lj7HukBJLlR6jbx0-eP%2Favatar.png?generation=1578363251850322&alt=media" alt="" />
                      </div>
                </div>
            </div>
         
        </Modal.Body>
      </Modal>
      
    </div>
  );
}
