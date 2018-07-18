import IPFS from 'ipfs';

const ipfs = new IPFS({
  repo: 'VelvetCurtain',
  EXPERIMENTAL: {
    pubsub: true,
  },
});

// const ipfs = ipfsAPI('localhost', '5001');
export const InitializeAlbum = async (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    try {
      ipfs.files.mkdir('/Album', (err: any) => {
        if (err) {
          reject(err);
        }
      });
      resolve(true);
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

export const InitializeStared = async (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    try {
      ipfs.files.mkdir('/Stared', (err: any) => {
        if (err) {
          reject(err);
        }
      });
      resolve(true);
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

export const loadPhoto = async (hash: string): Promise<any> => {
  return new Promise<any> ((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.files.cat(hash, { buffer: true }, (err: any, file: any) => {
          if (err) {
            throw err;
          }
          resolve(file);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

export const Instance = async (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        resolve(ipfs);
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

export const Id = async (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.id((err: any, payload: object) => {
          if (err) {
            throw err;
          }
          resolve(payload);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

/**
 * getFileList
 *
 */
export const getFileList = async (TargetAlbum = 'Album'): Promise<object[]> => {
  return new Promise<object[]>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.files.ls(`/${TargetAlbum}`, (err: any, payload: object[]) => {
          if (err) {
            throw err;
          }
          resolve(payload);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

/**
 * getFileStat
 *
 */
export const getFileStat = async (filename: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    ipfs.files.stat(`/Album/${filename}`, (err: any, payload: any) => {
      if (err) {
        reject(err);
      }
      resolve(payload.hash);
    });
  });
};

/**
 * renameFile
 *
 */
export const renameFile = async (folderName: string, fileName: string, afterFileName: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.files.mv(`/${folderName}/${fileName}`, `/${folderName}/${afterFileName}`, (err: any) => {
          if (err) {
            reject(err);
          }
          resolve(true);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

/**
 * existFile
 *
 */
export const existFile = async (folderName: string, fileName: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.files.ls(`/${folderName}/${fileName}`, (err: any, file: object) => {
          if (err) {
            resolve(false);
          }
          resolve(true);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

/**
 * copyFileToDest
 *
 */
export const copyFileToDest = async (
  sourceFolderName: string,
  destFolderName: string,
  fileName: string,
): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.files.cp(
          `/${sourceFolderName}/${fileName}`,
          `/${destFolderName}/${fileName}`,
          (err: any) => {
            if (err) {
              reject(err);
            }
            resolve(true);
          },
        );
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

/**
 * removeFile
 *
 */
export const removeFile = async (folderName: string, fileName: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.files.rm(`/${folderName}/${fileName}`, (err: any) => {
          if (err) {
            reject(err);
          }
          resolve(true);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};

export const AddPhotoToAlbum = async (filename: string, file: Buffer, Album = 'Album'): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    ipfs.files.write(`/${Album}/${filename}`, file, { create: true }, (err: any) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
};

export const PinAdd = async (hash: string): Promise<object[]> => {
  return new Promise<object[]>((resolve, reject) => {
    try {
      if (ipfs !== undefined) {
        ipfs.pin.add(hash, { recursive: false }, (err: any, payload: object[]) => {
          if (err) {
            throw err;
          }
          resolve(payload);
        });
      } else {
        reject('IPFS is undefined');
      }
    } catch (e) {
      reject(`IPFS is undefined: ${e}`);
    }
  });
};
