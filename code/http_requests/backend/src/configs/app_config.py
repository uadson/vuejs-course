import os

try:
    import tomllib
except:
    import toml as tomllib


class ConfigManager:
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls, *args, **kwargs)
            cls._instance._config = None
        return cls._instance
    
    def load_config(self, file_path: str):
        if not self._config:
            try:
                base_dir = os.path.dirname(os.path.abspath(__file__))
                full_path = os.path.join(base_dir, file_path)
                
                if not os.path.isfile(full_path):
                    raise FileNotFoundError
                with open(full_path, "rb") as file:
                    self._config = tomllib.load(file)
            except FileNotFoundError:
                raise Exception(f"Config file '{file_path}' not found at path: {full_path}. ")
            except tomllib.TOMLDecodeError:
                raise Exception(f"Error parsing the TOML file: '{file_path}'")

    def get(self, section: str, key: str):
        if not self._config:
            raise Exception(f"Configuration not loaded. Call `load_config` first.")
        try:
            return self._config[section][key]
        except KeyError:
            raise Exception(f"Key '{key}' not found in section '{section}'.")
        
config_manager: ConfigManager = ConfigManager()
