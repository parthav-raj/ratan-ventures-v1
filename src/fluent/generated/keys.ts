import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '425d7345bb244823a0d45f63fa64f610'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'cf5eda8fd79847febcc5e0b26d12276e'
                    }
                }
                composite: [
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '1e3d750264d44126abf35f054b0938fb'
                        key: {
                            application_file: '593e74b3461b48fd8385a64e70fc25cc'
                            source_artifact: '45914adc99d049b1ba6f342df5e0bb8b'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '44e3cd2bc253419f84e4b9f83a28ef84'
                        key: {
                            name: 'x_snc_ratan/vendor-react-dom--4cdffd9b'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '45566f59524c4582af53edd91b8b807e'
                        key: {
                            application_file: '64aea28afa794c0289fd1bdb211e01b7'
                            source_artifact: '45914adc99d049b1ba6f342df5e0bb8b'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '45914adc99d049b1ba6f342df5e0bb8b'
                        key: {
                            name: 'x_snc_ratan_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '4a6de7d13209422bb2dc577d1a7b0701'
                        key: {
                            name: 'x_snc_ratan/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '593e74b3461b48fd8385a64e70fc25cc'
                        key: {
                            endpoint: 'x_snc_ratan_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '64aea28afa794c0289fd1bdb211e01b7'
                        key: {
                            name: 'x_snc_ratan/main'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ef85d8cf4e444cd5b9eacb2fc375ea92'
                        key: {
                            application_file: '44e3cd2bc253419f84e4b9f83a28ef84'
                            source_artifact: '45914adc99d049b1ba6f342df5e0bb8b'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f058e01240ed47a1bad4c86e5c6fb952'
                        key: {
                            application_file: '4a6de7d13209422bb2dc577d1a7b0701'
                            source_artifact: '45914adc99d049b1ba6f342df5e0bb8b'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f98d17876e0a492da790c4c704ba97b0'
                        key: {
                            application_file: 'fe3f4ce014b44d1cae602cda2fef133d'
                            source_artifact: '45914adc99d049b1ba6f342df5e0bb8b'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'fe3f4ce014b44d1cae602cda2fef133d'
                        key: {
                            name: 'x_snc_ratan/vendor-react-dom--4cdffd9b.js.map'
                        }
                    },
                ]
            }
        }
    }
}
