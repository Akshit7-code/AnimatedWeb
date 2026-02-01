{ pkgs, ... }: {
  # The `channel` option defines the Nixpkgs channel that will be used to
  # get packages and other dependencies. You can change this to `unstable`
  # for the latest packages, but it's not guaranteed to be stable.
  channel = "stable-24.05"; # or "unstable"

  # The `packages` option is a list of packages to install from the specified
  # channel. You can search for packages on the NixOS package search:
  # https://search.nixos.org/packages
  packages = [
    pkgs.nodejs_20 # A specific version of Node.js, required for our project
  ];

  # The `env` option is a set of environment variables to define within the
  # workspace. These can be used for things like API keys, feature flags, etc.
  env = {
    # EXAMPLE_ENV_VAR = "hello, world!";
  };

  # The `idx` section contains configuration options that are specific to
  # the IDX environment.
  idx = {
    # The `extensions` option is a list of VS Code extensions to install from
    # the Open VSX Registry: https://open-vsx.org/
    extensions = [
      "dbaeumer.vscode-eslint" # A popular extension for linting JavaScript and TypeScript
    ];

    # The `workspace` section defines lifecycle hooks that run at different
    # times in the workspace's lifecycle.
    workspace = {
      # The `onCreate` hook runs when a workspace is first created.
      # We use it to install our npm dependencies.
      onCreate = {
        npm-install = "npm install";
      };

      # The `onStart` hook runs every time the workspace is (re)started.
      # We use it to start the development server.
      onStart = {
        dev-server = "npm run start";
      };
    };

    # The `previews` section allows you to configure a web preview for your
    # application. This is useful for seeing your changes in real-time.
    previews = {
      enable = true; # Enable the web preview feature
      previews = {
        # The `web` preview is a standard web server preview.
        web = {
          # The `command` to run to start the web server. The `$PORT`
          # variable is dynamically assigned by IDX.
          command = ["npm" "run" "start"];
          manager = "web"; # Use the standard web preview manager
        };
      };
    };
  };
}
